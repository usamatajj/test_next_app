import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { API_URL } from 'app/utils/constants';

async function fetchRepo(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/repos/usamatajj/${name}`, {
    next: {
      revalidate: 60,
    },
  });
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
