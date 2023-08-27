'use client';
import React, { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/courses/search?query=${query}`);
    const courses = await response.json();
    getSearchResults(courses);
    console.log(query, courses);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
};

export default CourseSearch;
