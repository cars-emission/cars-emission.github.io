// JavaScript code for search functionality

// Load JSON data
let json = `{"emissions":[
  {
    "title": "Euro 0",
    "directive": "70/220/EWG"
  },
  {
    "title": "Euro 1",
    "directive": "91/441A/EWG"
    
  },
  {
    "title": "Euro 1",
    "directive": "91/441B/EWG"
    
  },
  {
    "title": "Euro 1",
    "directive": "93/59/EWG"
  },
  {
    "title": "Euro 2",
    "directive": "94/12/EG"
    
  },
  {
    "title": "Euro 2",
    "directive": "96/44/EG"
   
  },
  {
    "title": "Euro 2",
    "directive": "96/69/EG"
    
  },
  {
    "title": "Euro 3",
    "directive": "98/69A/EG"
    
  },
  {
    "title": "Euro 3",
    "directive": "98/77A/EG"
    
  },
  {
    "title": "Euro 3",
    "directive": "1999/102A/EG"
    
  },
  {
    "title": "Euro 3",
    "directive": "2001/100A/EG"
    
  },
  {
    "title": "Euro 3",
    "directive": "2001/1A/EG"
    
  },
  {
    "title": "Euro 3",
    "directive": "2002/80A/EG"
    
  },
  {
    "title": "Euro 3",
    "directive": "2003/76A/EG"
    
  },
  {
    "title": "Euro 3",
    "directive": "2006/96A/EG"
    
  }
  ,
  {
    "title": "Euro 4",
    "directive": "98/69B/EG"  
  }
  ,
  {
    "title": "Euro 4",
    "directive": "98/69/EG I;B"  
  }
  ,
  {
    "title": "Euro 4",
    "directive": "98/77B/EG"
    
  },
  {
    "title": "Euro 4",
    "directive": "1999/102B/EG"
    
  },
  {
    "title": "Euro 4",
    "directive": "2001/100B/EG"
    
  },
  {
    "title": "Euro 4",
    "directive": "2001/1B/EG"
    
  },
  {
    "title": "Euro 4",
    "directive": "2002/80B/EG"
    
  },
  {
    "title": "Euro 4",
    "directive": "2003/76B/EG"
    
  },
  {
    "title": "Euro 4",
    "directive": "2006/96B/EG"
    
  },
  {
    "title": "Euro 5a",
    "directive": "(EG)692/2008A"
   
  },  
  {
      "title": "Euro 5a",
      "directive": "(EG)692/2008B"
      
    },
    {
      "title": "Euro 5a",
      "directive": "(EG)692/2008C"
      
    },
    {
      "title": "Euro 5a",
      "directive": "(EG)692/2008D"
      
    },
    {
      "title": "Euro 5a",
      "directive": "(EG)692/2008E"
      
    },
    {
      "title": "Euro 5a",
      "directive": "(EU)566/2011A"
      
    },
    {
      "title": "Euro 5a",
      "directive": "(EU)566/2011B"
      
    },
    {
      "title": "Euro 5a",
      "directive": "(EU)566/2011C"
      
    },
    {
      "title": "Euro 5a",
      "directive": "(EU)566/2011D"
      
    },
    {
      "title": "Euro 5a",
      "directive": "(EU)566/2011E"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)566/2011F"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)566/2011G"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)566/2011H"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)566/2011I"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)566/2011J"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)566/2011K"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)566/2011L"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)566/2011M"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EG)692/2008F"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EG)692/2008G"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EG)692/2008H"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EG)692/2008I"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EG)692/2008J"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EG)692/2008K"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EG)692/2008L"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EG)692/2008M"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)459/2012F"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)459/2012G"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)459/2012H"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)459/2012I"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)459/2012J"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)459/2012K"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)459/2012L"
      
    },
    {
      "title": "Euro 5b",
      "directive": "(EU)459/2012M"
      
    },
    {
      "title": "Euro 6a",
      "directive": "(EU)459/2012N"
      
    },
    {
      "title": "Euro 6a",
      "directive": "(EU)459/2012O"
      
    },
    {
      "title": "Euro 6a",
      "directive": "(EU)459/2012P"
      
    },
    {
      "title": "Euro 6a",
      "directive": "(EG)692/2008N"
      
    },
    {
      "title": "Euro 6a",
      "directive": "(EG)692/2008O"
      
    },
    {
      "title": "Euro 6a",
      "directive": "(EG)692/2008P"
      
    },
    {
      "title": "Euro 6a",
      "directive": "(EU)566/2011N"
      
    },
    {
      "title": "Euro 6a",
      "directive": "(EU)566/2011O"
      
    },
    {
      "title": "Euro 6a",
      "directive": "(EU)566/2011P"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EG)692/2008Q"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EG)692/2008R"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EG)692/2008S"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EG)692/2008T"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EG)692/2008U"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EG)692/2008V"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EG)692/2008w"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EG)692/2008X"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EG)692/2008Y"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EU)566/2011Q"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EU)566/2011R"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EU)566/2011S"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EU)566/2011T"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EU)566/2011U"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EU)566/2011V"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EU)566/2011W"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EU)566/2011X"
      
    },
    {
      "title": "Euro 6b",
      "directive": "(EU)566/2011Y"
      
    } ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012Q"
      
    }
     ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012R"
      
    }
     ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012R"
      
    }
     ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012S"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012T"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012U"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012V"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012W"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012X"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)459/2012Y"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)459/2012ZA"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)459/2012ZB"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)459/2012ZC"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)630/2012F"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)630/2012G"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)630/2012H"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)630/2012I"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)630/2012J"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)630/2012K"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)630/2012L"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)630/2012M"
      
    }
    ,
    {
      "title": "Euro 6a",
      "directive": "(EU)630/2012N"
      
    }
    ,
    {
      "title": "Euro 6a",
      "directive": "(EU)630/2012O"
      
    }
    ,
    {
      "title": "Euro 6a",
      "directive": "(EU)630/2012P"
      
    }
    ,
    {
      "title": "Euro 6a",
      "directive": "(EU)630/2012Q"
      
    }
    ,
    {
      "title": "Euro 6a",
      "directive": "(EU)630/2012R"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)630/2012S"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)630/2012T"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)630/2012U"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)630/2012V"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)630/2012W"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)630/2012X"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)630/2012Y"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)630/2012ZA"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)630/2012ZB"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)630/2012ZC"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)143/2013F"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)143/2013G"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)143/2013H"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)143/2013I"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)143/2013J"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)143/2013K"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)143/2013L"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)143/2013M"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)143/2013Q"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)143/2013R"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)143/2013S"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)143/2013T"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)143/2013U"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)143/2013V"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)143/2013W"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)143/2013X"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)143/2013Y"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)143/2013ZA"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)143/201ZB"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)143/2013ZC"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)171/2013F"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)171/2013G"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)171/2013H"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)171/2013I"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)171/2013J"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)171/2013K"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)171/2013L"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)171/2013M"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)171/2013Q"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)171/2013R"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)171/2013S"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)171/2013T"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)171/2013U"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)171/2013V"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)171/2013W"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)171/2013X"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)171/2013Y"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)171/2013ZA"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)171/2013ZB"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)171/2013ZC"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)195/2013F"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)195/2013G"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)195/2013H"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)195/2013I"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)195/2013J"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)195/2013K"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)195/2013L"
      
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "(EU)195/2013M"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)195/2013Q"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)195/2013R"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)195/2013S"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)195/2013T"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)195/2013U"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)195/2013V"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)195/2013W"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)195/2013X"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)195/2013Y"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)195/2013ZA"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)195/2013ZB"
      
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)195/2013ZC"
      
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014T"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014U"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014V"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014W"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014X"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014Y"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)133/2014ZA"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)133/2014ZB"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)133/2014ZC"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014T"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014U"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014V"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014W"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014X"
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "(EU)133/2014Y"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)133/2014ZA"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)133/2014ZB"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)133/2014ZC"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)133/2014ZD"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)133/2014ZE"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)133/2014ZF"
    }
    ,
    {
      "title": "Euro 6d-TEMP",
      "directive": "(EU)136/2014ZG"
    }
    ,
    {
      "title": "Euro 6d-TEMP",
      "directive": "(EU)136/2014ZH"
    }
    ,
    {
      "title": "Euro 6d-TEMP",
      "directive": "(EU)136/2014ZI"
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "(EU)136/2014ZJ"
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "(EU)136/2014ZK"
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "(EU)136/2014PLN"
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "(EU)136/2014ZL"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)2017/1151AA"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)2017/1151AB"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)2017/1151AC"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)2017/1151AD"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)2017/1151AE"
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "(EU)2017/1151AF"
    }
    ,
    {
      "title": "Euro 6d-TEMP",
      "directive": "(EU)2017/1151AG"
    }
    ,
    {
      "title": "Euro 6d-TEMP-EVAP",
      "directive": "(EU)2017/1151BG"
    }
    ,
    {
      "title": "Euro 6d-TEMP-ISC",
      "directive": "(EU)2017/1151CG"
    }
    ,
    {
      "title": "Euro 6d-TEMP-EVAP-ISC",
      "directive": "(EU)2017/1151DG"
    }
    ,
    {
      "title": "Euro 6d-TEMP",
      "directive": "(EU)2017/1151AH"
    }
    ,
    {
      "title": "Euro 6d-TEMP-EVAP",
      "directive": "(EU)2017/1151BH"
    }
    ,
    {
      "title": "Euro 6d-TEMP-EVAP-ISC",
      "directive": "(EU)2017/1151CH"
    }
    ,
    {
      "title": "Euro 6d-TEMP",
      "directive": "(EU)2017/1151AI"
    }
    ,
    {
      "title": "Euro 6d-TEMP-EVAP",
      "directive": "(EU)2017/1151BI"
    }
    ,
    {
      "title": "Euro 6d-TEMP-EVAP-ISC",
      "directive": "(EU)2017/1151CI"
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "(EU)2017/1151AJ"
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "(EU)2017/1151AK"
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "(EU)2017/1151AL"
    }
    ,
    {
      "title": "Euro 6d-ISC",
      "directive": "(EU)2017/1151AM"
    }
    ,
    {
      "title": "Euro 6d-ISC",
      "directive": "(EU)2017/1151AN"
    }
    ,
    {
      "title": "Euro 6d-ISC",
      "directive": "(EU)2017/1151AO"
    }
    ,
    {
      "title": "Euro 6d-ISC-FCM",
      "directive": "(EU)2017/1151AP"
    }
    ,
    {
      "title": "Euro 6d-ISC-FCM",
      "directive": "(EU)2017/1151AQ"
    }
    ,
    {
      "title": "Euro 6d-ISC-FCM",
      "directive": "(EU)2017/1151AR"
    },
    {
      "title": "Euro 0",
      "directive": "ECE-R83.00"
    }
    ,
    {
      "title": "Euro 1",
      "directive": "ECE-R83.01"
    }
    ,
    {
      "title": "Euro 1",
      "directive": "ECE-R83.02"
    }
    ,
    {
      "title": "Euro 2",
      "directive": "ECE-R83.03"
    } ,
    {
      "title": "Euro 2",
      "directive": "ECE-R83.04"
    }
    ,
    {
      "title": "Euro 3",
      "directive": "ECE-R83.05I"
    }
    ,
    {
      "title": "Euro 4",
      "directive": "ECE-R83.05II"
    }
    ,
    {
      "title": "Euro 5",
      "directive": "ECE-R83.05J"
    }
    ,
    {
      "title": "Euro 5",
      "directive": "ECE-R83.05K"
    }
     ,
    {
      "title": "Euro 5",
      "directive": "ECE-R83.05L"
    }
    ,
    {
      "title": "Euro 5",
      "directive": "ECE-R83.05M"
    }
    ,
    {
      "title": "Euro 3",
      "directive": "98/69/EG II-III;B"  
    }
    ,
    {
      "title": "Euro 3",
      "directive": "1999/96/EG; A"  
    }
    ,
    {
      "title": "Euro 0",
      "directive": "A10"  
    }
    ,
    {
      "title": "Euro 1",
      "directive": "A11"  
    }
    ,
    {
      "title": "Euro 2",
      "directive": "A12"  
    }
    ,
    {
      "title": "Euro 3",
      "directive": "A13"  
    }
    ,
    {
      "title": "Euro 4",
      "directive": "A14"  
    }
    ,
    {
      "title": "Euro 5a",
      "directive": "A15"  
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "A16"  
    }
    ,
    {
      "title": "Euro 6a",
      "directive": "A17"  
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "A18"  
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "A19"  
    }
    ,
    {
      "title": "Euro V",
      "directive": "A25"  
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "A28"  
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "A29"  
    }
    ,
    {
      "title": "Euro 6d-TEMP",
      "directive": "A30"  
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "A31"  
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "A32"  
    }
    ,
    {
      "title": "Euro 6d-TEMP",
      "directive": "A33"  
    }
    ,
    {
      "title": "Euro 0",
      "directive": "B00"  
    }
    ,
    {
      "title": "Euro 1",
      "directive": "B01"  
    }
    ,
    {
      "title": "Euro 2",
      "directive": "B02" 
    }
    ,
    {
      "title": "Euro 3",
      "directive": "B03" 
    }
    ,
    {
      "title": "Euro 4",
      "directive": "B04" 
    }
    ,
    {
      "title": "Euro 5a",
      "directive": "B5a" 
    }
    ,
    {
      "title": "Euro 5b",
      "directive": "B5b" 
    }
    ,
    {
      "title": "Euro 6a",
      "directive": "B6a" 
    }
    ,
    {
      "title": "Euro 6b",
      "directive": "B6b" 
    }
    ,
    {
      "title": "Euro 6c",
      "directive": "B6c" 
    }
    ,
    {
      "title": "Euro 6d",
      "directive": "B6d" 
    }
  ]}`;
  /*
   
   
   
    
    
    
   
    */

let data = JSON.parse(json);

let search = document.getElementById("search");
let results = document.getElementById("results");
let btn = document.getElementById("btn");
let item = document.createElement("li");

search.addEventListener("keyup", findEmission);
btn.addEventListener("click", clearAll);

function findEmission(ev) {
  results.innerHTML = "";

  let searchTerm = ev.target.value.toLowerCase();

  data.emissions.forEach(function (emission) {
    if (
      emission.title.toLowerCase().indexOf(searchTerm) > -1 ||
      emission.directive.toLowerCase().indexOf(searchTerm) > -1
    ) {
      item.innerHTML = emission.title;
      results.appendChild(item);
    }
  });
}
function clearAll(ev) {
  search.value = "";
  results.innerHTML = "";
}
