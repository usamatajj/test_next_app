import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  return NextResponse.json(
    courses.filter((course) =>
      course.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
  );
}
