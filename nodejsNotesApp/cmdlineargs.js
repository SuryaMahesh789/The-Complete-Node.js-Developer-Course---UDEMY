// cmd line arguments  - process.argv

// Getting input from users

console.log(process.argv)

// get cmd line arguments  alone 
console.log(process.argv[2])

const args = process.argv.slice(2)

console.log('args[0] : ',args[0])

const command = process.argv[2]

console.log(command)

if(command === 'add')
{
    console.log('Adding note!')
}
else if(command === 'remove')
    {
        console.log('Removing note!')
    }