import { gql, useQuery } from '@apollo/client'
import { useDataTokenStore } from '@/lib/store'

export const fetchData = () => {

    const Token = useDataTokenStore((state) => state.token )

    const MYNAME = gql `
        query {
            myProfile {
                id
                name
                avatar
            }
        }
    `;

    const {loading, error, data } = useQuery(MYNAME, {
        context: {
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (data) {
        const a = data.myProfile.name
        const b = data.myProfile.avatar
        // getName(data.myProfile.name)
        // getAvatar(data.myProfile.avatar)
        return [a, b]
    }
}
