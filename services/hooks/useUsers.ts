import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
    id: string;
    name: string;
    email: string;
    created_at: string;
}

export async function getUsers(): Promise<User[]> {

    const { data } = await api.get('http://localhost:3000/api/users')


    const users = data.users.map( user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return users
}

export function useUsers() {
    return useQuery('users', getUsers, {
        staleTime: 1000 * 5 // Durante 5 segundos não precisa ser recarregada
    })
}