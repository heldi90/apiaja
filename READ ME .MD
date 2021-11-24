Cara menggunakan Rest API Players



1. Extract File Rest API Players > Extract to Rest API Players 
maka jadilah Folder yang bernama Rest API Players

2. Open Visual Studio Code > File > Open Folder...(maka akan muncul jendela browser) > Pilih Folder Rest API Players
yang tadi di Extract yaitu folder Rest API Players > tekan Select Folder

3. Sekarang file Rest API Players sudah ada di dalam code editor Visual Studio Code

4. di dalam visual studio code  tekan CTRL+shif+`(backtip) atau buka terminal yang ada di Visual Studio Code

5. ketik npm install (ketik didalam terminal yang ada di visual studio code)

6. setelah selesai ketik npm update (ketik didalam terminal yang ada di visual studio code)

7. Untuk Menjalankan Server ketik npm run server (ketik didalam terminal yang ada di visual studio code)

// Cara mencoba Rest Api

1. Buka Postman yang sudah di install

2. Lihat dibagian MY Workspace > pilih Collections > tekan Import 
> filih File (maka akan terbuka jendela browser) > cari file postman yang ada di dalam folder Postman APi Player
> pilih file Postman_Api_Player > import

3. Pilih Postman API Player didalam nya terdapat
	* GET ALL data
	* POST Tambah data
	* GET Get one data
	* PUT Update data
	* DEL hapus data

// Cara mencoba rest Api

1. GET ALL data
	+ Tekan tombol SEND dan akan keluar Semua data pada Database
2. POST tambah data
	+ masukan data pada Body 
		{
   		 	"username": "heldi Ganteng",
    			"password": "dasdadsa",
    			"score": 0
		}

3. GET One Data 
	+ Masukan ID pada link localhost (contoh ID = 618d3eb171787d1f806b0e57 )
		maka link akan menajadi :
				- localhost:4000/api/posts/618d3eb171787d1f806b0e57

4. PUT Update Data
	+ Masukan ID pada link localhost (contoh ID = 618d3eb171787d1f806b0e57 )
		maka link akan menajadi :
				- localhost:4000/api/posts/618d3eb171787d1f806b0e57

	+ masukan data pada Body untuk melakukan Update 
		{
   		 	"username": "heldi Ganteng",
    			"password": "dasdadsa",
    			"score": 0
		}

5. DEL hapus data

	+ Masukan ID yang ingin di HAPUS pada link localhost (contoh ID = 618d3eb171787d1f806b0e57 )
		maka link akan menajadi :
				- localhost:4000/api/posts/618d3eb171787d1f806b0e57






// Software yang digunakan

1. Node.js versi v16.13.0 = https://nodejs.org/en/
	"dependencies": {
    		"cors": "^2.8.5",
   		"express": "^4.17.1",
    		"mongodb": "^4.2.0",
    		"mongoose": "^6.0.13",
    		"mongoose-global": "^1.0.1"
		  },

	"devDependencies": {
    		"eslint": "^8.2.0",
    		"eslint-config-airbnb-base": "^15.0.0",
    		"eslint-plugin-import": "^2.25.3",
    		"nodemon": "^2.0.15",
    		"prettier": "2.4.1"
  		}

2. Postman for Windows Version 8.10.0 win32 10.0.19042 / x64 = https://www.postman.com/


3. Visual Studio Code = https://code.visualstudio.com/
	Version: 1.62.3 (user setup)
	Commit: ccbaa2d27e38e5afa3e5c21c1c7bef4657064247
	Date: 2021-11-17T08:11:14.551Z
	Electron: 13.5.2
	Chrome: 91.0.4472.164
	Node.js: 14.16.0
	V8: 9.1.269.39-electron.0
	OS: Windows_NT x64 10.0.19042

4. Database Mongodb Atlas = https://docs.atlas.mongodb.com/getting-started/















	