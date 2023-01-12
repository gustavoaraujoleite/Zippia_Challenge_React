import api from "../api";

export async function request() {
  const result = await api.post("/api/jobs/ ", {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "Business Analyst",
    locations: [],
    numJobs: 20,
    previousListingHashes: [],
  });

  return result;
}
