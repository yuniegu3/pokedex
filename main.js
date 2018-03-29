
$( document ).ready(function() {
	console.log( "ready!" );

class Pokemon {
	constructor(pokname, hpstat, defstat, atkstat, abilities) {
		this.obj ={
		pokname : pokname,
		hpstat : hpstat,
		defstat : defstat,
		atkstat : atkstat,
		abilities : abilities,
		}
	}
	returnData() {return this.obj}
};
class MyTrainer {
	constructor(){
		this.pokemons = []
	}
  
add(pokemon) {
  this.pokemons.push(pokemon)
}

displayAll() {
  for(let i = 0; i < this.pokemons.length; ++i) {
	console.log(this.pokemons[i])
  }
}
}
let trainerHugo = new MyTrainer();



// console.log(trainerHugo)

// trainerHugo.displayAll()

let callGrowlithe = function(callback){
	let pic = $('#pic').attr('src', 'images/growlithe.png')
	$.ajax({
	type:'GET',
	url:'https://pokeapi.co/api/v2/pokemon/58/',
	success:function(data){
		let pokname = (data.name);
		// $('#pokname').text(pokname);
		let hpstat = (data.stats[5].base_stat);
		// $('#hpstat').text(hpstat);
		let defstat = (data.stats[3].base_stat);
		// $('#defstat').text(defstat);
		let atkstat = (data.stats[4].base_stat);
		// $('#atkstat').text(atkstat);
		let abilities = (data.abilities);
		// let abili = (data.abilities[0].ability.name);
		// // $('#abili').text(abili);
		// let abili2 = (data.abilities[1].ability.name);
		// // $('#abili2').text(abili2);
		// let abili3 = (data.abilities[2].ability.name);
		// $('#ability').text(abili + ' ' +  abili2 + ' ' + abili3);
		let growlithe = new Pokemon(pokname, hpstat, defstat, atkstat, abilities);
		return callback(growlithe.returnData());
	}, 
	error:function(error){
		console.log('There seems to be an error')
	}
	})
 };

 let callEevee = function(callback){
 	let pic = $('#pic').attr('src', 'images/eevee.png')
 	$.ajax({
 	type:'GET',
 	url:'https://pokeapi.co/api/v2/pokemon/133/',
 	success:function(data){
 		let pokname = (data.name);
		let hpstat = (data.stats[5].base_stat);
		let defstat = (data.stats[3].base_stat);
		let atkstat = (data.stats[4].base_stat);
		let abilities = (data.abilities);
		let eevee = new Pokemon(pokname, hpstat, defstat, atkstat, abilities);
		return callback(eevee.returnData());
	}, 
 	error:function(error){
 		console.log('There seems to be an error')
 	}
 	})
 };

 let callAbsol = function(callback){
 	let pic = $('#pic').attr('src', 'images/absol.png')
 	$.ajax({
 	type:'GET',
 	url:'https://pokeapi.co/api/v2/pokemon/359/',
 	success:function(data){
		let pokname = (data.name);
		let hpstat = (data.stats[5].base_stat);
		let defstat = (data.stats[3].base_stat);
		let atkstat = (data.stats[4].base_stat);
		let abilities = (data.abilities);
		let absol = new Pokemon(pokname, hpstat, defstat, atkstat, abilities);
		return callback(absol.returnData());
		
	}, 
 	error:function(error){
 		console.log('There seems to be an error')
 	}
 	})
 }


$('#clickgrowlithe').click(function(){
	callGrowlithe(function(data){
		trainerHugo.add(data)
		$('#pokname').text(data.pokname);
		$('#hpstat').text(data.hpstat);
		$('#defstat').text(data.defstat);
		$('#atkstat').text(data.atkstat);
		let abili = (data.abilities[0].ability.name);
		let abili2 = (data.abilities[1].ability.name);
		let abili3 = (data.abilities[2].ability.name);
		$('#ability').text(abili + ' ' +  abili2 + ' ' + abili3);
	});
});

$('#clickeevee').click(function(){
	callEevee(function(data){
		trainerHugo.add(data)
		$('#pokname').text(data.pokname);
		$('#hpstat').text(data.hpstat);
		$('#defstat').text(data.defstat);
		$('#atkstat').text(data.atkstat);
		let abili = (data.abilities[0].ability.name);
		let abili2 = (data.abilities[1].ability.name);
		let abili3 = (data.abilities[2].ability.name);
		$('#ability').text(abili + ' ' +  abili2 + ' ' + abili3);

	});
});

$('#clickabsol').click(function(){
	callAbsol(function(data){
		trainerHugo.add(data)
		$('#pokname').text(data.pokname);
		$('#hpstat').text(data.hpstat);
		$('#defstat').text(data.defstat);
		$('#atkstat').text(data.atkstat);
		let abili = (data.abilities[0].ability.name);
		let abili2 = (data.abilities[1].ability.name);
		let abili3 = (data.abilities[2].ability.name);
		$('#ability').text(abili + ' ' +  abili2 + ' ' + abili3);

	});
});

$('#clickall').click(function(){
	trainerHugo.displayAll()
	console.log('I am pressed')
});


// class Child {
// 	constructor(firstName, lastName, age) {
// 	  this.firstName = firstName
// 	  this.lastName = lastName
// 	  this.age = age
// 	}
//   }
  
//   class DayCare {
// 	constructor() { 
// 	  this.children = []
// 	}
	
// 	add(child) {
// 	  this.children.push(child)
// 	}
	
// 	displayAll() {
// 	  for(let i = 0; i < this.children.length; ++i) {
// 		console.log(this.children[i])
// 	  }
// 	}
//   }
  
//   let orlando = new Child("orlando", "c", 6)
//   let denisse = new Child("denisse", "c", -5)
  
//   let newDayCare = new DayCare()
  
//   newDayCare.add(orlando)
//   newDayCare.add(denisse)
  
//   newDayCare.displayAll()


// const callPokemon = {
// 	callGrowlithe : function(){
// 		let pic = $('#pic').attr('src', 'images/growlithe.png')
// 		$.ajax({
// 		type:'GET',
// 		url:'https://pokeapi.co/api/v2/pokemon/58/',
// 		success:function(data){
// 			let name = (data.name);
// 			$('#name').text(name);
// 			let hpstat = (data.stats[5].base_stat);
// 			$('#hpstat').text(hpstat);
// 			let defstat = (data.stats[3].base_stat);
// 			$('#defstat').text(defstat);
// 			let atkstat = (data.stats[4].base_stat);
// 			$('#atkstat').text(atkstat);
// 			let abili = (data.abilities[0].ability.name);
// 			$('#abili').text(abili);
// 			let abili2 = (data.abilities[1].ability.name);
// 			$('#abili2').text(abili2);
// 			let abili3 = (data.abilities[2].ability.name);
// 			$('#abili3').text(abili3);
// 		}, 
// 		error:function(error){
// 			console.log('There seems to be an error')
// 		}
// 		})
// 	},
// 	callEevee : function(){
// 		let pic = $('#pic').attr('src', 'images/eevee.png')
// 		$.ajax({
// 		type:'GET',
// 		url:'https://pokeapi.co/api/v2/pokemon/133/',
// 		success:function(data){
// 			let name = (data.name);
// 			$('#name').text(name);
// 			let hpstat = (data.stats[5].base_stat);
// 		   $('#hpstat').text(hpstat);
// 		   let defstat = (data.stats[3].base_stat);
// 		   $('#defstat').text(defstat);
// 		   let atkstat = (data.stats[4].base_stat);
// 		   $('#atkstat').text(atkstat);
// 		   let abili = (data.abilities[0].ability.name);
// 		   $('#abili').text(abili);
// 		   let abili2 = (data.abilities[1].ability.name);
// 		   $('#abili2').text(abili2);
// 		   let abili3 = (data.abilities[2].ability.name);
// 		   $('#abili3').text(abili3);
// 		},
// 		error:function(error){
// 			console.log('There seems to be an error')
// 		}
// 		})
// 	},
// 	callAbsol : function(){
//  	let pic = $('#pic').attr('src', 'images/absol.png')
//  	$.ajax({
//  	type:'GET',
//  	url:'https://pokeapi.co/api/v2/pokemon/359/',
//  	success:function(data){
// 		let name = (data.name);
// 		$('#name').text(name);
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
// 	 })
// 	},
//  };


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
// 		let hpstat = (data.stats[5].base_stat);
// 		$('#hpstat').text(hpstat);
// 		let defstat = (data.stats[3].base_stat);
// 		$('#defstat').text(defstat);
// 		let atkstat = (data.stats[4].base_stat);
// 		$('#atkstat').text(atkstat);
// 		let abili = (data.abilities[0].ability.name);
// 		// $('#abili').text(abili);
// 		let abili2 = (data.abilities[1].ability.name);
// 		// $('#abili2').text(abili2);
// 		let abili3 = (data.abilities[2].ability.name);
// 		$('#ability').text(abili + ' ' +  abili2 + ' ' + abili3);
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
// 		// $('#abili').text(abili);
// 		let abili2 = (data.abilities[1].ability.name);
// 		// $('#abili2').text(abili2);
// 		let abili3 = (data.abilities[2].ability.name);
// 		$('#ability').text( abili + ' ' +  abili2 + '  ' + abili3);
// 	}, 
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
// 		// $('#abili').text(abili);
// 		let abili2 = (data.abilities[1].ability.name);
// 		// $('#abili2').text(abili2);
// 		let abili3 = (data.abilities[2].ability.name);
// 		$('#ability').text(abili + ' ' +  abili2 + ' ' + abili3);
// 	}, 
//  	error:function(error){
//  		console.log('There seems to be an error')
//  	}
//  	})
//  };	

// $('#growlithe').click(function(){
// 	callGrowlithe();
// });

// $('#eevee').click(function(){
// 	callEevee();
// });

// $('#absol').click(function(){
// 	callAbsol();
// });


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
 
 

});
