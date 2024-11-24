// function getBathValue() {
//     var uiBathrooms = document.getElementsByName("uiBathrooms");
//     for(var i in uiBathrooms) {
//       if(uiBathrooms[i].checked) {
//           return parseInt(i)+1;
//       }
//     }
//     return -1; // Invalid Value
//   }
  
//   function getBHKValue() {
//     var uiBHK = document.getElementsByName("uiBHK");
//     for(var i in uiBHK) {
//       if(uiBHK[i].checked) {
//           return parseInt(i)+1;
//       }
//     }
//     return -1; // Invalid Value
//   }
  
//   function onClickedEstimatePrice() {
//     console.log("Estimate price button clicked");
//     var sqft = document.getElementById("uiSqft");
//     var bhk = getBHKValue();
//     var bathrooms = getBathValue();
//     var location = document.getElementById("uiLocations");
//     var estPrice = document.getElementById("uiEstimatedPrice");
  
//     var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
//     //var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  
//     $.post(url, {
//         total_sqft: parseFloat(sqft.value),
//         bhk: bhk,
//         bath: bathrooms,
//         location: location.value
//     },function(data, status) {
//         console.log(data.estimated_price);
//         estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
//         console.log(status);
//     });
//   }
  
//   function onPageLoad() {
//     console.log( "document loaded" );
//     var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
//     //var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
//     $.get(url,function(data, status) {
//         console.log("got response for get_location_names request");
//         if(data) {
//             var locations = data.locations;
//             var uiLocations = document.getElementById("uiLocations");
//             $('#uiLocations').empty();
//             for(var i in locations) {
//                 var opt = new Option(locations[i]);
//                 $('#uiLocations').append(opt);
//             }
//         }
//     });
//   }
  
//   window.onload = onPageLoad;


//Chatgpt

function getBathValue() {
    let uiBathrooms = document.getElementsByName("uiBathrooms");
    for (let i in uiBathrooms) {
        if (uiBathrooms[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1; // Invalid Value
}

function getBHKValue() {
    let uiBHK = document.getElementsByName("uiBHK");
    for (let i in uiBHK) {
        if (uiBHK[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
    let sqft = document.getElementById("uiSqft").value;
    let bhk = getBHKValue();
    let bathrooms = getBathValue();
    let location = document.getElementById("uiLocations").value;
    let estPrice = document.getElementById("uiEstimatedPrice");

    if (sqft && bhk && bathrooms && location) {
        let url = "http://127.0.0.1:5000/predict_home_price";
        $.post(url, {
            total_sqft: parseFloat(sqft),
            bhk: bhk,
            bath: bathrooms,
            location: location
        }, function(data, status) {
            estPrice.style.display = "block";
            estPrice.innerHTML = `<h4>${data.estimated_price} Lakh</h4>`;
        });
    } else {
        alert("Please fill in all fields");
    }
}

function onPageLoad() {
    let url = "http://127.0.0.1:5000/get_location_names";
    $.get(url, function(data, status) {
        if (data) {
            let locations = data.locations;
            let uiLocations = document.getElementById("uiLocations");
            uiLocations.innerHTML = '<option selected disabled>Choose a Location</option>';
            for (let loc of locations) {
                let opt = new Option(loc);
                uiLocations.append(opt);
            }
        }
    });
}

window.onload = onPageLoad;
