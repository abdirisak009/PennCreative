// A more robust utility to detect if text is likely Somali
export function isSomaliText(text: string): boolean {
  // Common Somali words and patterns
  const somaliPatterns = [
    "waa",
    "iyo",
    "oo",
    "ku",
    "ka",
    "la",
    "ma",
    "in",
    "aan",
    "u",
    "kale",
    "maxaa",
    "sidee",
    "maxay",
    "waxaan",
    "waxa",
    "waxay",
    "miyaad",
    "miyuu",
    "soo",
    "noqo",
    "qof",
    "waqti",
    "meel",
    "lacag",
    "macallin",
    "ardayga",
    "dugsiga",
    "caafimaad",
    "qoys",
    "saaxiib",
    "magaalada",
    "wadanka",
    "shaqo",
    "guri",
    "baabuur",
    "telefoon",
    "internet",
    "warbaahinta",
    "warbixin",
    "barnaamij",
    "mashruuc",
    "adeeg",
    "xafiis",
    "shirkad",
    "sidee",
    "maxay",
    "goormaa",
    "halkee",
    "imisa",
    "kuma",
    "yaa",
    "maxaad",
    "waa maxay",
    "waa kuma",
    "waa sidee",
    "waa goormaa",
    "waa halkee",
    "waa imisa",
    "waa maxaad",
    "waa kuwee",
    "waa intee",
    "waa ayo",
    "waa kee",
    "waa tee",
    "waa kuwee",
    "waa kuwe",
    "waa intee",
    "waa inta",
    "waa kee",
    "waa tee",
    "waa kuwee",
    "waa kuwe",
    "waa intee",
    "waa inta",
  ]

  // Convert to lowercase for comparison
  const lowerText = text.toLowerCase()

  // Check if the text contains Somali patterns
  for (const pattern of somaliPatterns) {
    // Check for whole words by adding word boundaries
    const regex = new RegExp(`\\b${pattern}\\b`, "i")
    if (regex.test(lowerText)) {
      return true
    }
  }

  // Additional check for common Somali characters and patterns
  const somaliCharPattern = /[xdhqc]{2,}/i // Double consonants common in Somali
  if (somaliCharPattern.test(lowerText)) {
    return true
  }

  // Check for common Somali sentence structures
  const somaliSentencePatterns = [
    /waa\s+\w+/i,
    /ma\s+\w+/i,
    /miyaa\s+\w+/i,
    /maxaa\s+\w+/i,
    /sidee\s+\w+/i,
    /waxaan\s+\w+/i,
  ]

  for (const pattern of somaliSentencePatterns) {
    if (pattern.test(lowerText)) {
      return true
    }
  }

  return false
}
