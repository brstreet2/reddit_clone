import { query, collection, getDocs } from "firebase/firestore";
import { firestore } from "../clientApp";

export const getMySnippets = async (userId: string) => {
  const snippetQuery = query(
    collection(firestore, `users/${userId}/communitySnippets`)
  );

  const snippetDocs = await getDocs(snippetQuery);
  return snippetDocs.docs.map((doc) => ({ ...doc.data() }));
};