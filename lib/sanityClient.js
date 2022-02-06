import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'u6ufstii',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skNUlmJAslIHwATsU4SKBaqpgmLh35k0j8p8LLxtr1KPCXAgenITAc6zLRtvLv7vA8upxr4JOw3lWyftJTagxqLQVudGh29AqHZIF5E03DHYvCMGMOxFPj92wgwNFwBFTbKVjCwJoKSdTc6sEQXlmZhEVTXkh72rmH59yvsJXR9YFvl7mm7Q',
  useCdn: false,
})