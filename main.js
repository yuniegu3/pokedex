let callGrowlithe =function(){
	let pic = $('#pic').attr('src', 'growlithe.png')
	$.ajax({
	type:'GET',
	url:'https://pokeapi.co/api/v2/pokemon/58/',
	success:function(data){
		let pokname = (data.name);
		$('#pokname').text(pokname);
		//upper case thing is not working
		// $('#pokname').val($('#pokname').val().toUpperCase());
		let hpstat = (data.stats[5].base_stat);
		$('#hpstat').text(hpstat);
		let defstat = (data.stats[3].base_stat);
		$('#defstat').text(defstat);
		let atkstat = (data.stats[4].base_stat);
		$('#atkstat').text(atkstat);
		let abili = (data.abilities[0].ability.name);
		$('#abili').text(abili);
		let abili2 = (data.abilities[1].ability.name);
		$('#abili2').text(abili2);
		let abili3 = (data.abilities[2].ability.name);
		$('#abili3').text(abili3);
	},
	error:function(error){
		console.log('There seems to be an error')
	}
	})
 };

 let callEevee = function(){
 	let pic = $('#pic').attr('src', 'eevee.png')
 	$.ajax({
 	type:'GET',
 	url:'https://pokeapi.co/api/v2/pokemon/133/',
 	success:function(data){
 		let pokname = (data.name);
 		$('#pokname').text(pokname);
 		let hpstat = (data.stats[5].base_stat);
		$('#hpstat').text(hpstat);
		let defstat = (data.stats[3].base_stat);
		$('#defstat').text(defstat);
		let atkstat = (data.stats[4].base_stat);
		$('#atkstat').text(atkstat);
		let abili = (data.abilities[0].ability.name);
		$('#abili').text(abili);
		let abili2 = (data.abilities[1].ability.name);
		$('#abili2').text(abili2);
		let abili3 = (data.abilities[2].ability.name);
		$('#abili3').text(abili3);
 	},
 	error:function(error){
 		console.log('There seems to be an error')
 	}
 	})
 };

 let callAbsol = function(){
 	let pic = $('#pic').attr('src', 'absol.png')
 	$.ajax({
 	type:'GET',
 	url:'https://pokeapi.co/api/v2/pokemon/359/',
 	success:function(data){
 		let pokname = (data.name);
 		$('#pokname').text(pokname);
 		let hpstat = (data.stats[5].base_stat);
		$('#hpstat').text(hpstat);
		let defstat = (data.stats[3].base_stat);
		$('#defstat').text(defstat);
		let atkstat = (data.stats[4].base_stat);
		$('#atkstat').text(atkstat);
		let abili = (data.abilities[0].ability.name);
		$('#abili').text(abili);
		let abili2 = (data.abilities[1].ability.name);
		$('#abili2').text(abili2);
		let abili3 = (data.abilities[2].ability.name);
		$('#abili3').text(abili3);
 	},
 	error:function(error){
 		console.log('There seems to be an error')
 	}
 	})
 };
 
// let hugo = {
// 	growlithe: callGrowlithe();
// }


