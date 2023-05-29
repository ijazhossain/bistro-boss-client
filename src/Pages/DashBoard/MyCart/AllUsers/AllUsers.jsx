import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    const handleUserRoll = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is admin now.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = () => {

    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                <td>
                                    {user.role ? 'admin' : <button onClick={() => handleUserRoll(user)} className="btn btn-ghost btn-lg bg-orange-500 text-white"><FaUserShield className=""></FaUserShield></button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-lg bg-[#B91C1C] text-white"><FaTrash className=""></FaTrash></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;