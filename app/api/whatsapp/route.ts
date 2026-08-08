import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const service = searchParams.get('service');
  const number = process.env.WHATSAPP_NUMBER || '919787362199';
  
  let text = "Hi Wisdo Tech, I would like to discuss a project.";
  if (service) {
    text = `Hi Wisdo Tech, I am interested in your ${service} services and would like to discuss a project.`;
  }
  
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  return NextResponse.redirect(url);
}
