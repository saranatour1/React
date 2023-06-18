# dbs

### Or statement

```bash
db.my_first_db.find( { $or: [ { state: 'Jenin' }, { state: 'Tulkarem' } ] } )
```

### Inserting into a collection using the shell

```bash
db.my_first_db.insertOne({name: "Ibrahim", state: "Jenin",lucky_number: 8 , birthday: {month: 12 , day :11 ,year:1996}})
```

### Find a document based on queries

```bash
db.my_first_db.find({})
```

### Get all students whose lucky number is greater than 3

```bash
db.my_first_db.find( { lucky_number: {$gt:3} } )
```

### Get all students whose lucky number is less than or equal to 10

```bash
db.my_first_db.find( { lucky_number: {$lte:10} } )
```

### Get all students whose lucky number is between 1 and 9 (inclusive)

```bash
db.my_first_db.find( {$and: [{ lucky_number: {$lte:9}} , {lucky_number:{$gte:1}} ] })
```

### Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

```bash
db.my_first_db.updateMany( {}, { '$set': { "interests": ['coding', 'brunch', 'MongoDB'] } }, false, true)
```

### Source

[Inserting new attribute to a document using MongoDB ( Python )](https://stackoverflow.com/questions/5056190/inserting-new-attribute-to-a-document-using-mongodb-python)

### Add some unique interests for each particular student into each of their interest arrays. ++Add the interest 'taxes' into someone's interest array.

```bash
db.my_first_db.update({_id:ObjectId("648ee4837aab2916bc2e4015")} , {$push: {interests:'running'}})
```

### Remove the 'taxes' interest you just added.

```bash
db.my_first_db.update({_id:ObjectId("648ee4837aab2916bc2e4015")} , {$pull: {interests:'taxes'}})
```

### Remove all students who are from California.

```bash
db.my_first_db.remove({state: "Tulkarem"})
```

### Remove a student by name

```bash
db.my_first_db.remove({name: "Ibrahim"})
```

### Remove a student whose lucky number is greater than 5 (JUST ONE)

```bash
db.my_first_db.remove({lucky_number:{$gt:1}},true)
```

### Add a field to each student collection called 'number_of_belts' and set it to 0

```bash
db.my_first_db.updateMany( {}, { '$set': { "number_of_belts": 0 } }, false, true)
```

### Increment this field by 1 for all students in Washington (Seattle Dojo).

```bash
db.my_first_db.updateMany({state:'Jenin'} ,{$inc:{number_of_belts:1}})
```

### Rename

```bash
db.my_first_db.updateMany({},  { $rename: { "number_of_belts": "belts_earned" } })
```

### Unset

```bash
db.my_first_db.updateMany({},{$unset:{belts_earned:1}})
```

### Add a 'updated_on' field, and set the value as the current date.

```bash
db.my_first_db.updateMany({},{$currentDate: {"updated_on": { $type: "date" } }},false, true)
```

### Resources

[$or](https://www.mongodb.com/docs/manual/reference/operator/query/or/)