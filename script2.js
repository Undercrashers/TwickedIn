import { LineChart } from '@carbon/charts'
        import '@carbon/charts/styles.css'

    // grab chart holder DOM element


// grab chart holder DOM element
const chartHolder = document.getElementById('my-bar-chart')

    const stackedBarData = [
  {
    "group": "Dataset 1",
    "key": "Qty",
    "value": 34200
  },
  {
    "group": "Dataset 1",
    "key": "More",
    "value": 23500
  },
  {
    "group": "Dataset 1",
    "key": "Sold",
    "value": 53100
  },
  {
    "group": "Dataset 1",
    "key": "Restocking",
    "value": 42300
  },
  {
    "group": "Dataset 1",
    "key": "Misc",
    "value": 12300
  },
  {
    "group": "Dataset 2",
    "key": "Qty",
    "value": 34200
  },
  {
    "group": "Dataset 2",
    "key": "More",
    "value": 53200
  },
  {
    "group": "Dataset 2",
    "key": "Sold",
    "value": 42300
  },
  {
    "group": "Dataset 2",
    "key": "Restocking",
    "value": 21400
  },
  {
    "group": "Dataset 2",
    "key": "Misc",
    "value": 0
  },
  {
    "group": "Dataset 3",
    "key": "Qty",
    "value": 41200
  },
  {
    "group": "Dataset 3",
    "key": "More",
    "value": 18400
  },
  {
    "group": "Dataset 3",
    "key": "Sold",
    "value": 34210
  },
  {
    "group": "Dataset 3",
    "key": "Restocking",
    "value": 1400
  },
  {
    "group": "Dataset 3",
    "key": "Misc",
    "value": 42100
  },
  {
    "group": "Dataset 4",
    "key": "Qty",
    "value": 22000
  },
  {
    "group": "Dataset 4",
    "key": "More",
    "value": 1200
  },
  {
    "group": "Dataset 4",
    "key": "Sold",
    "value": 9000
  },
  {
    "group": "Dataset 4",
    "key": "Restocking",
    "value": 24000,
    "audienceSize": 10
  },
  {
    "group": "Dataset 4",
    "key": "Misc",
    "value": 3000,
    "audienceSize": 10
  }
];

    const stackedBarOptions = {
  "title": "Line (discrete)",
  "axes": {
    "bottom": {
      "title": "2019 Annual Sales Figures",
      "mapsTo": "key",
      "scaleType": "labels"
    },
    "left": {
      "mapsTo": "value",
      "title": "Conversion rate",
      "scaleType": "linear"
    }
  },
  "height": "400px",
  "theme": "g100"
};

    // initialize the chart
    new Charts.LineChart(chartHolder, {
      data: stackedBarData,
      options: stackedBarOptions,
    });

const im = document.querySelector(".poimg");
const heart = document.getElementById("heart")

im.addEventListener("dblclick", () => {
    console.log("hi")
    heart.classList.replace("far", "fas");
    heart.style.color = "red";
    document.getElementById("pa").innerHTML = "Liked by You and 164 Others";
    im.classList.add('active');

    setInterval(() => {
        im.classList.remove('active');
    }, 2000);

})

heart.addEventListener("click", hearthandle);
function hearthandle() {
    var att = heart.getAttributeNode("class").value
    if (att == 'far fa-heart') {
        heart.classList.replace("far", "fas");
        heart.style.color = "red";
        document.getElementById("pa").innerHTML = "Liked by You and 164 Others";

    }
    else if (att == 'fas fa-heart') {
        heart.classList.replace("fas", "far");
        heart.style.color = "white";
        document.getElementById("pa").innerHTML = "Liked by sn_gujjar and 163 Others";


    }

}