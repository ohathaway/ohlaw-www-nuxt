// server/api/documents/[id].ts
import {
  GetObjectCommand,
  NoSuchKey,
  r2Client
} from '@/server/utils/r2'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Document ID is required'
    })
  }

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
      Key: id
    })

    const response = await r2Client.send(command)
    
    console.info('r2 response code: ', response.$metadata.httpStatusCode)
    if (!response.Body) {
      throw createError({
        statusCode: 404,
        message: 'Document not found'
      })
    }

    // Convert stream to buffer
    const chunks = []
    for await (const chunk of response.Body as any) {
      chunks.push(chunk)
    }
    const buffer = Buffer.concat(chunks)

    setHeaders(event, {
      'Content-Type': response.ContentType || 'application/pdf',
      'Content-Disposition': `attachment filename="${id}"`,
      'Cache-Control': 'public, max-age=31536000',
      'Content-Length': buffer.length.toString()
    })

    return buffer
  } catch (error) {
    if (error instanceof NoSuchKey){
      console.error('file not found')
      throw createError({
        statusCode: 404,
        message: 'Document not found'
      })
    } else {
      console.error('R2 Error:', error.message)
      throw createError({
        statusCode: 500,
        message: 'Error retrieving document'
      })
    }
  }
})