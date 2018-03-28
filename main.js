const pokemon = {
	callGrowlithe : function(){
		let pic = $('#pic').attr('src', 'images/growlithe.png')
		$.ajax({
		type:'GET',
		url:'https://pokeapi.co/api/v2/pokemon/58/',
		success:function(data){
			let pokname = (data.name);
			$('#pokname').text(pokname);
			//upper case thing is not working
			// let caps = $('#pokname').attr('string').toUpperCase;
			// $('pokename').append;
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
	},
	callEevee : function(){
		let pic = $('#pic').attr('src', 'images/eevee.png')
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
	},
	callAbsol : function(){
 	let pic = $('#pic').attr('src', 'images/absol.png')
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
	},
 };





const trainer = { };



// $( document ).ready(function() {
//     console.log( "ready!" );



// let callGrowlithe = function(){
// 	let pic = $('#pic').attr('src', 'images/growlithe.png')
// 	$.ajax({
// 	type:'GET',
// 	url:'https://pokeapi.co/api/v2/pokemon/58/',
// 	success:function(data){
// 		let pokname = (data.name);
// 		$('#pokname').text(pokname);
// 		//upper case thing is not working
// 		// let caps = $('#pokname').attr('string').toUpperCase;
// 		// $('pokename').append;
// 		let hpstat = (data.stats[5].base_stat);
// 		$('#hpstat').text(hpstat);
// 		let defstat = (data.stats[3].base_stat);
// 		$('#defstat').text(defstat);
// 		let atkstat = (data.stats[4].base_stat);
// 		$('#atkstat').text(atkstat);
// 		let abili = (data.abilities[0].ability.name);
// 		$('#abili').text(abili);
// 		let abili2 = (data.abilities[1].ability.name);
// 		$('#abili2').text(abili2);
// 		let abili3 = (data.abilities[2].ability.name);
// 		$('#abili3').text(abili3);
// 	}, 
// 	error:function(error){
// 		console.log('There seems to be an error')
// 	}
// 	})
//  };

//  let callEevee = function(){
//  	let pic = $('#pic').attr('src', 'images/eevee.png')
//  	$.ajax({
//  	type:'GET',
//  	url:'https://pokeapi.co/api/v2/pokemon/133/',
//  	success:function(data){
//  		let pokname = (data.name);
//  		$('#pokname').text(pokname);
//  		let hpstat = (data.stats[5].base_stat);
// 		$('#hpstat').text(hpstat);
// 		let defstat = (data.stats[3].base_stat);
// 		$('#defstat').text(defstat);
// 		let atkstat = (data.stats[4].base_stat);
// 		$('#atkstat').text(atkstat);
// 		let abili = (data.abilities[0].ability.name);
// 		$('#abili').text(abili);
// 		let abili2 = (data.abilities[1].ability.name);
// 		$('#abili2').text(abili2);
// 		let abili3 = (data.abilities[2].ability.name);
// 		$('#abili3').text(abili3);
//  	},
//  	error:function(error){
//  		console.log('There seems to be an error')
//  	}
//  	})
//  };

//  let callAbsol = function(){
//  	let pic = $('#pic').attr('src', 'images/absol.png')
//  	$.ajax({
//  	type:'GET',
//  	url:'https://pokeapi.co/api/v2/pokemon/359/',
//  	success:function(data){
//  		let pokname = (data.name);
//  		$('#pokname').text(pokname);
//  		let hpstat = (data.stats[5].base_stat);
// 		$('#hpstat').text(hpstat);
// 		let defstat = (data.stats[3].base_stat);
// 		$('#defstat').text(defstat);
// 		let atkstat = (data.stats[4].base_stat);
// 		$('#atkstat').text(atkstat);
// 		let abili = (data.abilities[0].ability.name);
// 		$('#abili').text(abili);
// 		let abili2 = (data.abilities[1].ability.name);
// 		$('#abili2').text(abili2);
// 		let abili3 = (data.abilities[2].ability.name);
// 		$('#abili3').text(abili3);
//  	},
//  	error:function(error){
//  		console.log('There seems to be an error')
//  	}
//  	})
//  };	


//  const pokemon = {
// 	growlithe: callGrowlithe(),
// 	absol: callAbsol(),
// 	eevee: callEevee(),
// }
//trying out a search input that will pull the pokemon searched from the pokemon api.

//  let inputname = $('input').val();
//  let callPokemons = function(name){
//  	$.ajax({
//  	type:'GET',
//  	url:'https://pokeapi.co/api/v2/pokemon/',
//  	success:function(data){
// 		if inputname = (data.results.name)
// 		let pokname = (data.name)
//  		$('#pokname').text(pokname);
//  		let hpstat = (data.stats[5].base_stat);
// 		$('#hpstat').text(hpstat);
// 		let defstat = (data.stats[3].base_stat);
// 		$('#defstat').text(defstat);
// 		let atkstat = (data.stats[4].base_stat);
// 		$('#atkstat').text(atkstat);
// 		let abili = (data.abilities[0].ability.name);
// 		$('#abili').text(abili);
// 		let abili2 = (data.abilities[1].ability.name);
// 		$('#abili2').text(abili2);
// 		let abili3 = (data.abilities[2].ability.name);
// 		$('#abili3').text(abili3);
		 
//  	},
//  	error:function(error){
//  		console.log('There seems to be an error')
//  	}
//  	})
//  };
 
 

// });
