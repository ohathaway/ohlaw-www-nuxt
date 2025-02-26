export default defineEventHandler(async (event) => {
  // Get the term parameter from the URL
  const term = event.context.params.term;
  
  // In a real implementation, you would fetch this data from your database or CMS
  // This provides more detailed information about each term
  const glossaryTerms = {
    "abatement": {
      id: 1,
      title: "Abatement",
      slug: "abatement",
      definition: "The reduction or elimination of a tax, debt, obligation, or legal action.",
      description: `<p>Abatement in legal contexts typically refers to the reduction, suspension, or elimination of a payment, tax, or some other obligation. It can apply in various areas of law:</p>
      <ul>
        <li><strong>Tax abatement:</strong> A reduction or elimination of taxes, often to encourage economic development or in response to financial hardship.</li>
        <li><strong>Debt abatement:</strong> The reduction or cancellation of a debt obligation.</li>
        <li><strong>Nuisance abatement:</strong> The elimination or reduction of a nuisance, such as excessive noise, pollution, or other issues that interfere with property enjoyment.</li>
      </ul>
      <p>In legal proceedings, an abatement may also refer to the suspension or termination of a lawsuit.</p>`,
      categories: [
        { id: 1, name: "Tax Law" },
        { id: 2, name: "Debt Relief" }
      ],
      relatedTerms: [
        { id: 19, title: "Secured Debt", slug: "secured-debt" },
        { id: 21, title: "Unsecured Debt", slug: "unsecured-debt" }
      ],
      sources: [
        { title: "Black's Law Dictionary", url: null },
        { title: "Internal Revenue Code", url: null }
      ]
    },
    "bankruptcy": {
      id: 2,
      title: "Bankruptcy",
      slug: "bankruptcy",
      definition: "A legal process through which people or entities who cannot repay debts to creditors may seek relief from some or all of their debts.",
      description: `<p>Bankruptcy is a legal process designed to help individuals and businesses eliminate or repay their debts under the protection and guidance of the bankruptcy court. The primary purposes of bankruptcy are to:</p>
      <ul>
        <li>Give debtors a fresh start by discharging (eliminating) debts</li>
        <li>Repay creditors in an orderly manner according to priority</li>
        <li>Preserve the value of the debtor's property where possible</li>
      </ul>
      <p>In the United States, bankruptcy is governed by federal law, primarily the Bankruptcy Code. The most common forms of bankruptcy are Chapter 7 (liquidation) and Chapter 13 (repayment plan) for individuals, and Chapter 11 (reorganization) for businesses.</p>
      <p>Filing for bankruptcy provides an automatic stay, which immediately stops most collection actions against the debtor, including lawsuits, wage garnishments, and direct communication from creditors seeking payment.</p>`,
      categories: [
        { id: 3, name: "Bankruptcy Law" },
        { id: 2, name: "Debt Relief" }
      ],
      relatedTerms: [
        { id: 3, title: "Chapter 7 Bankruptcy", slug: "chapter-7-bankruptcy" },
        { id: 4, title: "Chapter 13 Bankruptcy", slug: "chapter-13-bankruptcy" },
        { id: 13, title: "Means Test", slug: "means-test" },
        { id: 19, title: "Secured Debt", slug: "secured-debt" },
        { id: 21, title: "Unsecured Debt", slug: "unsecured-debt" }
      ],
      relatedArticles: [
        {
          title: `Estate Planning During Divorce: Lessons from Shannen Doherty's Legacy`,
          slug: 'actress-shannen-doherty-s-death-last-year-highlights-how-critical-timing-can-be-when-it-comes-to-estate-planning-during-divorce-her-last-minute-divorce-likely-saved-her-estate-millions-and-prevented-years-of-legal-battles'
        }
      ],
      sources: [
        { title: "11 U.S.C. - Bankruptcy Code", url: "https://www.law.cornell.edu/uscode/text/11" },
        { title: "United States Courts - Bankruptcy Basics", url: "https://www.uscourts.gov/services-forms/bankruptcy" }
      ]
    },
    "chapter-7-bankruptcy": {
      id: 3,
      title: "Chapter 7 Bankruptcy",
      slug: "chapter-7-bankruptcy",
      definition: "A type of bankruptcy that involves liquidation of assets to pay creditors.",
      description: `<p>Chapter 7 bankruptcy, also known as "liquidation bankruptcy," is the most common form of bankruptcy filed by individuals. In this process:</p>
      <ul>
        <li>A trustee is appointed to oversee the case</li>
        <li>Non-exempt assets are sold (liquidated) to pay creditors</li>
        <li>Most remaining unsecured debts are discharged</li>
      </ul>
      <p>However, not all debts can be discharged in Chapter 7 bankruptcy. Debts that typically survive include:</p>
      <ul>
        <li>Most student loans</li>
        <li>Recent tax debts</li>
        <li>Child support and alimony</li>
        <li>Debts obtained through fraud</li>
        <li>Certain court judgments</li>
      </ul>
      <p>To qualify for Chapter 7, debtors usually must pass a "means test" that evaluates their income and expenses. If their income is too high, they may need to file under Chapter 13 instead.</p>
      <p>Most Chapter 7 cases are "no-asset" cases, meaning the debtor has no non-exempt assets for the trustee to sell to pay creditors.</p>`,
      categories: [
        { id: 3, name: "Bankruptcy Law" }
      ],
      relatedTerms: [
        { id: 2, title: "Bankruptcy", slug: "bankruptcy" },
        { id: 4, title: "Chapter 13 Bankruptcy", slug: "chapter-13-bankruptcy" },
        { id: 13, title: "Means Test", slug: "means-test" }
      ],
      sources: [
        { title: "11 U.S.C. Chapter 7", url: "https://www.law.cornell.edu/uscode/text/11/chapter-7" },
        { title: "United States Courts - Chapter 7 Basics", url: "https://www.uscourts.gov/services-forms/bankruptcy/bankruptcy-basics/chapter-7-bankruptcy-basics" }
      ]
    },
    "estate-planning": {
      id: 6,
      title: "Estate Planning",
      slug: "estate-planning",
      definition: "The process of arranging for the management and disposal of a person's estate during their life and after death.",
      description: `<p>Estate planning is the process of anticipating and arranging for the management and disposal of a person's estate during their life and after death, while minimizing gift, estate, generation-skipping transfer, and income tax. The key components of comprehensive estate planning include:</p>
      <ul>
        <li><strong>Will:</strong> A legal document that declares how a person wants their property distributed after death.</li>
        <li><strong>Trusts:</strong> Legal arrangements that allow assets to be held by one party for the benefit of another.</li>
        <li><strong>Power of Attorney:</strong> Legal authorization for someone to act on another's behalf in private affairs, business, or legal matters.</li>
        <li><strong>Healthcare Directives:</strong> Documents that specify a person's wishes for medical treatment if they become unable to make decisions.</li>
        <li><strong>Beneficiary Designations:</strong> Instructions that specify who will receive the assets in accounts like life insurance, retirement plans, etc.</li>
        <li><strong>Guardianship Nominations:</strong> Designations of who should care for minor children if parents are unable to do so.</li>
      </ul>
      <p>Proper estate planning can help avoid probate, minimize taxes, protect assets, and ensure that personal wishes are carried out regarding healthcare decisions and the distribution of property.</p>`,
      categories: [
        { id: 4, name: "Estate Law" },
        { id: 5, name: "Wills and Trusts" }
      ],
      relatedTerms: [
        { id: 9, title: "Heir", slug: "heir" },
        { id: 10, title: "Intestate", slug: "intestate" },
        { id: 12, title: "Living Trust", slug: "living-trust" },
        { id: 15, title: "Power of Attorney", slug: "power-of-attorney" },
        { id: 16, title: "Probate", slug: "probate" },
        { id: 18, title: "Revocable Trust", slug: "revocable-trust" },
        { id: 22, title: "Will", slug: "will" }
      ],
      sources: [
        { title: "American Bar Association - Estate Planning", url: "https://www.americanbar.org/groups/real_property_trust_estate/resources/estate_planning/" }
      ]
    },
    "will": {
      id: 22,
      title: "Will",
      slug: "will",
      definition: "A legal document that expresses a person's wishes as to how their property is to be distributed after their death.",
      description: `<p>A will, also known as a "last will and testament," is a legal document that communicates a person's final wishes regarding their property and dependents. Key elements of a valid will typically include:</p>
      <ul>
        <li><strong>Testator Declaration:</strong> Clear identification of the document as the testator's will.</li>
        <li><strong>Bequests:</strong> Specific instructions on how property should be distributed.</li>
        <li><strong>Executor Appointment:</strong> Naming a person responsible for carrying out the will's instructions.</li>
        <li><strong>Guardian Designation:</strong> For minor children, if applicable.</li>
        <li><strong>Signature:</strong> The testator must sign the will (or direct someone to sign on their behalf in their presence).</li>
        <li><strong>Witnesses:</strong> Most states require at least two witnesses who are not beneficiaries.</li>
      </ul>
      <p>For a will to be valid, the testator must have testamentary capacity, meaning they:</p>
      <ul>
        <li>Understand the nature and extent of their property</li>
        <li>Know who would naturally inherit their property</li>
        <li>Understand what a will does and how it operates</li>
        <li>Are not under undue influence or fraud</li>
      </ul>
      <p>Without a valid will, a person's estate will be distributed according to state intestacy laws, which may not align with their wishes.</p>`,
      categories: [
        { id: 4, name: "Estate Law" },
        { id: 6, name: "Probate Law" }
      ],
      relatedTerms: [
        { id: 6, title: "Estate Planning", slug: "estate-planning" },
        { id: 10, title: "Intestate", slug: "intestate" },
        { id: 16, title: "Probate", slug: "probate" },
        { id: 20, title: "Testator", slug: "testator" }
      ],
      sources: [
        { title: "Uniform Probate Code", url: null },
        { title: "State-specific probate statutes", url: null }
      ]
    }
  };

  // Return the specific term data if it exists
  if (glossaryTerms[term]) {
    return glossaryTerms[term];
  }
  
  // Return 404 if term not found
  setResponseStatus(event, 404, 'Term not found');
  return { error: 'Term not found' };
});