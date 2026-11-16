import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { llmsTxt } from '../lib/llms';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).map((p) => ({ id: p.id, title: p.data.title, description: p.data.description }));
  return new Response(llmsTxt(posts), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
