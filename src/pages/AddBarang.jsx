import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormBarang from "../component/FormBarang";

function AddBarang(){
    const navigate = useNavigate();
    const [ form, setForm] = useState({ nama_barang: '', panjang_barang: '', lebar_panjang: '', kode_barang: '', harga_barang: '' });
    const handleChange = e =>{
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        fetch('http://192.168.1.12:3000/barang/addbarang' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(() => {
            navigate('/');
        })
    }
    return(
        <div>
            Tambah Barang
            <Link to="/">
                <button>kembali </button>
            </Link>
            <FormBarang form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default AddBarang;