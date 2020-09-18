let obj = [
  {
      id: 13,
      studentId: 2,
      student: {
          Nama: "Mario"
      },
      subject: {
          Pelajaran: "Matematika"
      }
  },
  {
      id: 3,
      studentId: 3,
      student: {
          Nama: "Danu"
      },
      subject: {
          Pelajaran: "Matematika"
      }
  },
  {
      id: 10,
      studentId: 6,
      student: {
          Nama: "Coki"
      },
      subject: {
          Pelajaran: "Matematika"
      }
  },
  {
      id: 11,
      studentId: 7,
      student: {
          Nama: "Ciko"
      },
      subject: {
          "Pelajaran": "Matematika"
      }
  },
  {
      id: 14,
      studentId: 2,
      student: {
          Nama: "Mario"
      },
      subject: {
          Pelajaran: "Agama Islam"
      }
  },
  {
      id: 2,
      studentId: 3,
      student: {
          Nama: "Danu"
      },
      subject: {
          Pelajaran: "Agama Islam"
      }
  },
  {
      id: 9,
      studentId: 6,
      student: {
          "Nama": "Coki"
      },
      subject: {
          "Pelajaran": "Agama Islam"
      }
  },
  {
      id: 15,
      studentId: 2,
      student: {
          Nama: "Mario"
      },
      subject: {
          Pelajaran: "Sejarah"
      }
  },
  {
      id: 5,
      studentId: 3,
      student: {
          Nama: "Danu"
      },
      subject: {
          Pelajaran: "Sejarah"
      }
  }
]

const GroupByName = (arr) => {

    let newArr = []
    let newObj = {}
   
    for(let i = 0; i < arr.length; i++){
      if(newObj[arr[i].student.Nama]  === undefined){
        
        newObj[arr[i].student.Nama] = {
          "studenId" : arr[i].studentId,
          "Pelajaran" : []
        }
      }
      newObj[arr[i].student.Nama].Pelajaran.push(arr[i].subject.Pelajaran)
    }
   // console.log(newObj);
    

    for(student in newObj){
      
      
      let objLagi = {}
      //console.log(objLagi);
      
     for(pelajaran in newObj[student]){
        //console.log(newObj[student][pelajaran]);
        
        objLagi = {
            student,
            pelajaran : newObj[student][pelajaran],
            
            
        }
        objLagi.studentId = newObj[student].studenId    
     }
      newArr.push(objLagi)
    }
    
    
    return newArr
}
console.log(GroupByName(obj));

module.exports = GroupByName
