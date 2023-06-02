import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    // console.log(menu);
    const handleDelete = (item) => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('res from menuItem delete', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                // fetch(`http://localhost:5000/carts/${id}`, {
                //     method: 'DELETE',

                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         if (data.deletedCount > 0) {
                //             refetch();
                //             Swal.fire(
                //                 'Deleted!',
                //                 'Your file has been deleted.',
                //                 'success'
                //             )
                //         }
                //     })

            }
        })


    }
    return (
        <div className="w-[90%] ml-8">
            <SectionTitle subHeading='---Hurry Up!---' heading='MANAGE ALL ITEMS'></SectionTitle>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold"></div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <td className="text-end">
                                    <button className="btn btn-ghost btn-lg bg-[#D1A054] text-white"><FaEdit className=""></FaEdit></button>
                                </td>
                                <td className="text-end">
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg bg-[#B91C1C] text-white"><FaTrash className=""></FaTrash></button>
                                </td>

                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;