import Link from 'next/link';

import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';
import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';

const Logo = () => (
  <>
    <Link
      href={{
        pathname: LINKS.HOME.HREF,
        query: {
          [QUERY_PARAMS.CATEGORY]: STATIC_MOVIE_CATEGORIES[0].name,
          [QUERY_PARAMS.PAGE]: 1
        }
      }}>
      <a>
        <picture>
          <source srcSet="https://ik.imagekit.io/os33grffu/Blue_and_Pink_Aesthetic_Film_Company_Logo-removebg-preview.png?updatedAt=1716918175680" media='(min-width: 80em)' />
          <img
            className='logo-img'
            width='250'
            height='250'
            src="https://ik.imagekit.io/os33grffu/Blue_and_Pink_Aesthetic_Film_Company_Logo-removebg-preview.png?updatedAt=1716918175680"
            alt='movie ticket' />
        </picture>
      </a>
    </Link>
    <style jsx>{`
      a {
        width: 100%;
        height: 18rem;
        display: grid;
        place-items: center;
        margin-bottom: 2rem;
      }

     .logo-img {
        max-width: 75%;
      }
    `}</style>
  </>
);

export default Logo;