import {
  apiVersion,
  dataset,
  projectId,
  readToken,
  useCdn,
} from './sanity.api'
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,  
  token: readToken,
  //perspective: 'published',
};

const client = createClient(config);

export default client;
