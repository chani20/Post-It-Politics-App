/*const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://api.knowyourvote.io/v1/candidate/2e041023-1c20-4550-af4c-add0dc722d5e/issues/')
    .then(res => {
        const $ = cheerio.load(res.data);

        const covidpolicy = $('.Issue__Issue__policyList__etDDx');
        const firstbul = covidpolicy.children().first();

        console.log(covidpolicy.html());

    });*/

 const fetch = require("node-fetch");
 

 fetch('https://api.knowyourvote.io/v1/candidate/2e041023-1c20-4550-af4c-add0dc722d5e/issues/')
    .then(response => response.json())
    .then(data => {
        var activeobj = new ActiveXObject("Scripting.FileSystemObject");
        var aocfile = "C:\Users\ishan\webscraping\AOCpolicies.txt";

        activeobj.CreateTextFile(aocfile);
        var fl = activeobj.GetFile(aocfile);
        var streamw = file.OpenAsTextStream(2);

        streamw.WriteLine("data.issues[5].candidate_issue_platform + \n");
        streamw.WriteLine("data.issues[25].candidate_issue_platform + \n");
        streamw.WriteLine("N/A + \n");
        streamw.WriteLine("data.issues[0].candidate_issue_platform + \n");
        streamw.WriteLine("data.dissues[4].candidate_issue_platform");
        streamw.Close();//this is the part of the code that should work with a browser
     
        //defintely prints to console
        /*console.log(data.issues[5].candidate_issue_platform + "\n");//COVID-19
        console.log(data.issues[25].candidate_issue_platform + "\n");//Climate-Environment
        console.log("N/A" + "\n");//Taxes section is blank
        console.log(data.issues[0].candidate_issue_platform + "\n");//Healthcare
        console.log(data.dissues[4].candidate_issue_platform);//Foreign Policy*/

        
        

    })
    .catch(error => console.error(error))

//var obj = JSON.parse(apiurl);

//console.log(obj.issues[5].candidate_issue_platform);
