function addData(tabel, nama, nim, alamat) {
    tabel.row.add([
        nama,
        nim,
        alamat,
        `<button type="button" id="ubahBtn" class="btn btn-primary ubahBtn">
            <i class="bi-pencil-square"></i>
            Ubah
        </button>
        <button type="button" id="hapusBtn" class="btn btn-danger hapusBtn">
                <i class="bi-trash"></i>
            Hapus
        </button>`
    ]).draw();
}

function showAlert(title, message, type = "success") {
    $(".toast-body").text(message);
    $(".toast-title").text(title);
    $(".toast-header").removeClass("bg-success bg-danger bg-warning bg-primary");
    if(type === "success") {
        $(".toast-header").addClass("bg-success");
    } else if(type === "danger") {
        $(".toast-header").addClass("bg-danger");
    } else if(type === "warning") {
        $(".toast-header").addClass("bg-warning");
    } else if(type === "info") {
        $(".toast-header").addClass("bg-primary");
    }

    $(".toast").toast("show");
}

function tambahData() {
    // Logika tambah data
    // Jika berhasil tambah data
    showAlert("Added!","Alert berhasil menambahkan data baru", "success");
    // Jika gagal tambah data karena data tidak lengkap
    // showAlert("Alert data tidak dapat tambah data karena data tidak lengkap");
}

function ubahData() {
    // Logika ubah data
    // Jika berhasil ubah data
    showAlert("Updated!", "Alert berhasil melakukan update data", "info");
}

function hapusData() {
    // Logika hapus data
    // Jika berhasil hapus data
    showAlert("Deleted!", "Alert berhasil menghapus data", "danger");
}

$(document).ready(function () {
    const tabel = new DataTable('#servis', {
        scrollX: true
    });
    // Sample data
    // array dari object (kumpuln data dgn nama)
    var data = [
        {
            "nim": "00000000001",
            "nama": "Admin",
            "alamat": "System"
        },
        {
            "nim": "00000000002",
            "nama": "Guest",
            "alamat": "Nomaden"
        },
        {
            "nim": "00000000003",
            "nama": "BACA DULU WHOIY",
            "alamat": "JANGAN DI RUSAK YAKK DATA YANG SUDAH ADA...WKWKWK 0101"
        },
        {
            "nim": "00000013433",
            "nama": "Steven",
            "alamat": "Tangerang, Indonesia"
        },
        {
            "nim": "00000013536",
            "nama": "B. Bias A. Ch.",
            "alamat": "Yogyakarta, Indonesia"
        },
        {
            "nim": "00000013536",
            "nama": "Reddy Kusuma J.",
            "alamat": "Bandar Lampung, Indonesia"
        },
        {
            "nim": "00000013889",
            "nama": "Rully Saputra",
            "alamat": "Palembang, Indonesia"
        },
        {
            "nim": "00000013938",
            "nama": "Fathan Fadillah",
            "alamat": "Pamulang, Tangerang Selatan"
        },
        {
            "nim": "00000014136",
            "nama": "Rexy Samuel",
            "alamat": "Jakarta, Indonesia"
        },
        {
            "nim": "00000014142",
            "nama": "Hans Aditia Lesmana",
            "alamat": "Jakarta"
        }
    ];

    data.forEach((item) => {
        addData(tabel, item.nim, item.nama, item.alamat);
    });

    $('#tambahBtn').on('click', function () {
        var nim = $('#nim').val();
        var nama = $('#nama').val();
        var alamat = $('#alamat').val();
        
        if(nim === "" || nama === "" || alamat === "") {
            showAlert("Warning!", "Tidak Dapat Menambah Mahasiswa", "warning");
            return;
        }
        addData(tabel, nim, nama, alamat);
        tambahData();
    });

    $('tr').on('click', '.hapusBtn', function () {
        hapusData();
        tabel
            .row($(this).parents('tr'))
            .remove()
            .draw();
    });

    $('tr').on('click', '.ubahBtn', function () {
        var data = tabel.row($(this).parents('tr')).data();
        $('#rowid').val(tabel.row($(this).parents('tr')).index());
        $('#nimEdit').val(data[0]);
        $('#namaEdit').val(data[1]);
        $('#alamatEdit').val(data[2]);
        $('#editModal').modal('show');
    });

    $('#submitEdit').on('click', function () {
        var nim = $('#nimEdit').val();
        var nama = $('#namaEdit').val();
        var alamat = $('#alamatEdit').val();
        var rowid = $('#rowId').val();

        tabel.row(rowid).data([nim, nama, alamat, `<button type="button" id="ubahBtn" class="btn btn-primary ubahBtn">Ubah</button>
        <button type="button" id="hapusBtn" class="btn btn-danger hapusBtn">Hapus</button>`]).draw();
        $('#editModal').modal('hide');
        ubahData();
    });






});