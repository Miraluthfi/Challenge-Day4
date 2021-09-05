let cek = function(bil){
           //cek ganjil genap
            if(bil % 2 == 0){
                console.log("genap")
            } else {
                console.log("ganjil")
            }
            //multiplies
            let kali = bil * 5
            console.log(kali)
            return bil
            //prime number
            for(let i = 2; i<= bil; i++){
                if(bil % i == 0){
                    console.log("Not Prime Number")
                } 
            } console.log("Prime Number")
        }
            
        cek(3)