export default defineEventHandler(async (event) => {
  // In a real implementation, you would fetch this data from your database or CMS
  // This is a sample data structure that matches the expected format in the components
  
  return [
    {
      id: 1,
      title: "Abatement",
      slug: "abatement",
      definition: "The reduction or elimination of a tax, debt, obligation, or legal action.",
      categories: ["Tax Law", "Debt Relief"]
    },
    {
      id: 2,
      title: "Bankruptcy",
      slug: "bankruptcy",
      definition: "A legal process through which people or entities who cannot repay debts to creditors may seek relief from some or all of their debts.",
      categories: ["Bankruptcy Law", "Debt Relief"]
    },
    {
      id: 3,
      title: "Chapter 7 Bankruptcy",
      slug: "chapter-7-bankruptcy",
      definition: "A type of bankruptcy that involves liquidation of assets to pay creditors.",
      categories: ["Bankruptcy Law"]
    },
    {
      id: 4,
      title: "Chapter 13 Bankruptcy",
      slug: "chapter-13-bankruptcy",
      definition: "A form of bankruptcy that allows individuals to reorganize their finances and pay down their debt over time.",
      categories: ["Bankruptcy Law"]
    },
    {
      id: 5,
      title: "Deed",
      slug: "deed",
      definition: "A written document that transfers ownership of real property from one party to another.",
      categories: ["Real Estate Law", "Property Law"]
    },
    {
      id: 6,
      title: "Estate Planning",
      slug: "estate-planning",
      definition: "The process of arranging for the management and disposal of a person's estate during their life and after death.",
      categories: ["Estate Law", "Wills and Trusts"]
    },
    {
      id: 7,
      title: "Fiduciary",
      slug: "fiduciary",
      definition: "A person who holds a legal or ethical relationship of trust with another person or group, typically managing money or property.",
      categories: ["Estate Law", "Trust Law"]
    },
    {
      id: 8,
      title: "Guardian",
      slug: "guardian",
      definition: "A person who has been appointed by a court to care for a minor child or incompetent adult.",
      categories: ["Family Law", "Estate Law"]
    },
    {
      id: 9,
      title: "Heir",
      slug: "heir",
      definition: "A person who inherits or is entitled by law or by the terms of a will to inherit the estate of another.",
      categories: ["Estate Law", "Probate Law"]
    },
    {
      id: 10,
      title: "Intestate",
      slug: "intestate",
      definition: "Dying without having made a valid will.",
      categories: ["Estate Law", "Probate Law"]
    },
    {
      id: 11,
      title: "Judgment",
      slug: "judgment",
      definition: "A court's final determination of the rights and obligations of the parties in a case.",
      categories: ["Litigation", "Civil Procedure"]
    },
    {
      id: 12,
      title: "Living Trust",
      slug: "living-trust",
      definition: "A trust created during a person's lifetime where a designated person, the trustee, is given responsibility for managing that person's assets.",
      categories: ["Estate Law", "Trust Law"]
    },
    {
      id: 13,
      title: "Means Test",
      slug: "means-test",
      definition: "A calculation used in bankruptcy to determine whether an individual has enough disposable income to repay debts.",
      categories: ["Bankruptcy Law"]
    },
    {
      id: 14,
      title: "Non-Profit Organization",
      slug: "non-profit-organization",
      definition: "An organization that uses its income to achieve its goals rather than distributing it as profit or dividends.",
      categories: ["Business Law", "Tax Law"]
    },
    {
      id: 15,
      title: "Power of Attorney",
      slug: "power-of-attorney",
      definition: "A legal document giving one person the authority to act on behalf of another person.",
      categories: ["Estate Law", "Elder Law"]
    },
    {
      id: 16,
      title: "Probate",
      slug: "probate",
      definition: "The legal process of administering a deceased person's estate, including resolving all claims and distributing the property.",
      categories: ["Estate Law", "Probate Law"]
    },
    {
      id: 17,
      title: "Quitclaim Deed",
      slug: "quitclaim-deed",
      definition: "A deed that transfers one's interest in a property without any warranty as to the extent of the interest or title.",
      categories: ["Real Estate Law", "Property Law"]
    },
    {
      id: 18,
      title: "Revocable Trust",
      slug: "revocable-trust",
      definition: "A trust where provisions can be altered or canceled by the grantor during their lifetime.",
      categories: ["Estate Law", "Trust Law"]
    },
    {
      id: 19,
      title: "Secured Debt",
      slug: "secured-debt",
      definition: "Debt that is backed by collateral to reduce the risk associated with lending.",
      categories: ["Bankruptcy Law", "Debt Relief"]
    },
    {
      id: 20,
      title: "Testator",
      slug: "testator",
      definition: "A person who has made a will or testament that is in effect at the time of their death.",
      categories: ["Estate Law", "Probate Law"]
    },
    {
      id: 21,
      title: "Unsecured Debt",
      slug: "unsecured-debt",
      definition: "Debt that is not backed by collateral to secure the loan in case of default.",
      categories: ["Bankruptcy Law", "Debt Relief"]
    },
    {
      id: 22,
      title: "Will",
      slug: "will",
      definition: "A legal document that expresses a person's wishes as to how their property is to be distributed after their death.",
      categories: ["Estate Law", "Probate Law"]
    },
    {
      id: 23,
      title: "Zoning Laws",
      slug: "zoning-laws",
      definition: "Local laws that regulate the use of land and buildings for different purposes, such as residential or commercial.",
      categories: ["Real Estate Law", "Property Law"]
    }
  ];
});