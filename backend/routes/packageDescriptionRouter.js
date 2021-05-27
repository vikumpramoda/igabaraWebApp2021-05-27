const router = require('express').Router();
let Package = require('../models/packageDescription.model');

router.route('/').get((req,res)=>{
    Package.find()
    .then(packages=> res.json(packages))
    .catch(err=>res.status(400).json('Error:'+err));

});

router.route('/add').post((req,res)=>{
    const packageno=req.body.packageno;
    const description = req.body.description;
    const packageprice=Number(req.body.packageprice);
    const date=Date.parse(req.body.date);


    const newPackage=new Package({
        packageno,
        description,
        packageprice,
        date,
    });

    newPackage.save()
    .then(()=>res.json('Package added!'))
    .catch(err=>res.status(400).json('Error:'+err));
});


    router.route('/:id').get((req,res)=>{
        Package.findById(req.params.id)
        .then(()=>res.json(Package))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/:id').delete((req,res)=>{
        Package.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Package deleted'))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/update/:id').post((req,res)=>{
        Package.findById(req.params.id)
        .then(packages=>{
            packages.packageno=req.body.packageno;
            packages.description=req.body.description;
            packages.packageprice=Number(req.body.packageprice);
            packages.date=Date.parse(req.body.date);

            packages.save()
            .then(()=>res.json('Exercise updated!!!!'))
            .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error:'+err));
    });

module.exports = router;
