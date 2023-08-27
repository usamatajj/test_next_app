import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { API_URL } from 'app/utils/constants';

async function fetchRepos() {
  const response = await fetch(`${API_URL}/users/usamatajj/repos`, {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
