import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BarangList from "./BarangList";


function Barang() {

    const [barangs, setBarang] = useState([]);
    useEffect(() => {
        fetchBarangs();
    }, []);

    const fetchBarangs = () => {
        fetch('https://8f83-140-0-202-203.ngrok-free.app/')
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