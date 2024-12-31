const loadAllPhones=()=>{
    console.log('2 sec gece ga')
    document.getElementById("spiner").classList="block"
}

const handleSearch=()=>{
    
    document.getElementById("spiner").remove('hidden')
    setTimeout(function(){
        loadAllPhones()

    },1500)
}