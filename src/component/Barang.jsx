import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BarangList from "./BarangList";


function Barang() {

    const [barangs, setBarang] = useState([]);
    useEffect(() => {
        fetchBarangs();
    }, []);

    const fetchBarangs = () => {
        fetch('http://192.168.1.12:3000/')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setBarang(data.payload.data);
        });
    }

    return(
        <div>
            <h1>Daftar Barang</h1>
            <BarangList barangs={barangs}/>
            <Link to="/addBarang">
                <button>Tambah Barang</button>
            </Link>
        </div>
    )
}

export default Barang;