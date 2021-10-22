import styles from './Data.module.css';
import Link from 'next/link';
export const getStaticProps =async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {users: data}
    }
}
export default function Data({users}) {
    return (
        <div>
            <h2>All Data</h2>
            {users.map(user=>(
                <Link href={'/Data/' + user.id} key={user.id}>
                    <a className={styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}
