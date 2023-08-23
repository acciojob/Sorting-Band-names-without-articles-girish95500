let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp={};
let arr2=[];
for( let i=0;i<touristSpots.length;i++)
	{
		let words = touristSpots.split(" ");
		let fin = "";
		if(touristSpots[i].toLowerCase()!="the" &&  touristSpots[i].toLowerCase()!="a" && touristSpots[i].toLowerCase()!="an")
		{
			fin = fin+touristSpots[i];
		}
		mp[touristSpots[i]] = fin.trim();
		arr2.push(mp[touristSpots[i]]);
	}
return arr2.sort(a,b) => a>b;


