
import { useLoaderData } from 'react-router-dom';

const AllCraftsPage = () => {
    const crafts = useLoaderData()
    

    return (
        <div>
            <h2>{crafts.length}</h2>
        </div>
    );
};

export default AllCraftsPage;