const express = require('express');
const cors = require('cors')

	var corsOptions = {
	  origin: 'http://localhost:4200',
	  //domain được phép gọi request mà server chấp nhận (vd: request đến từ http://localhost:4200  được server cho phép), 
	  //giả sử node server là http://localhost:8000
	  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
	};
    
    //khoi tao 1 app su dung module express
	const app = express();
    //app khoi tao phia tren su sung cors and su dung cor vs option
	app.use(cors(corsOptions));

    app.use(express.json());

    //app se được lắng nghe trên port 8000 nếu hoạt động sẽ hiện console log
    app.listen(8000, () => {
		console.log('Server Start and running in port 8000');
	  });

    // khoi tao 1 service   // phuong thức truy cập là get (post-get-put-delete)
    app.route('/api/staff').get((req, res) => {
    console.log('staffs read');
        res.send([{ name: 'pht', id:'stf_1', age:'22',role:'manager' }, { name: 'vda', id:'stf_2', age:'20', role:'admin' }]
        );
    });

// dung cho phan insert
    //insert dữ liệu thì sử dụng phương thức post
    app.route('/api/insertstaff').post((req, res) => {
        console.log('insert staff');
        console.log('staff info:'+req.body);
            //res.send(201, req.body);
        res.status(201).send(req.body);
        });


    app.route('/api/deletestaff:_id').delete((req, res)=>{
        console.log('delete staff');
        console.log('staff info: '+ req.body);
        res.status(201).send(req.body);
    })

    
    app.route('/api/updatestaff:_id').put((req, res)=>{
        console.log('update staff');
        console.log('staff info: '+ req.body);
        res.status(201).send(req.body);
    })



    