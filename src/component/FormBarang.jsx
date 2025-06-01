function FormBarang({ form, handleChange, handleSubmit}){
    return(
            <form onSubmit={handleSubmit}>
                <input name="nama_barang" value={form.nama_barang} onChange={handleChange} placeholder="Nama Barang"/>
                <input name="panjang_barang" value={form.panjang_barang} onChange={handleChange} placeholder="Panjang Barang"/>
                <input name="lebar_barang" value={form.lebar_barang} onChange={handleChange} placeholder="Lebar Barang"/>
                <input name="kode_barang" value={form.kode_barang} onChange={handleChange} placeholder="Kode Barang"/>
                <input name="harga_barang" value={form.harga_barang} onChange={handleChange} placeholder="Harga Barang"/>
                <button type="submit">Submit</button>
            </form>
    );
}

export default FormBarang;