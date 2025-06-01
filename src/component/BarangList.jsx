function BarangList({barangs}){
    return (
        <ul>
            {barangs.map(barang => (
                <li key={barang.id_barang}>
                    Nama Barang : {barang.nama_barang}
                    Panjang Barang : {barang.panjang_barang}
                    Lebar Barang : {barang.lebar_barang}
                    Kode barang : {barang.kode_barang}
                    Harga Barang: : {barang.harga_barang}
                </li>
            ))}
        </ul>
    );
};
export default BarangList;