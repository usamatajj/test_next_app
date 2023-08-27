import { NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';
import courses from './data.json';

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, link, level } = await request.json();
  const newCourse = { id: uuid(), title, description, link, level };
  console.log(newCourse);
  courses.push(newCourse);
  return NextResponse.json(courses);
}
