/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronouns = ["the", "our"];
  var adjs = ["great", "big"];
  var nouns = ["jogger", "racoon"];
  var domains = [".com", ".net", ".us", ".io", ".ve"];

  function random(arr) {
    let number = Math.floor(Math.random() * arr.length);
    return number;
  }

  // CON FOR LOOP
  function createDomainFor(pronoun, adj, noun, domain) {
    let finalDomain = [];
    for (let p = 0; p < pronoun.length; p++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
          finalDomain.push(
            pronoun[p]
              .concat(adj[a])
              .concat(noun[n])
              .concat(domain[random(domain)])
          );
        }
      }
    }
    return finalDomain;
  }

  //with for of loop
  function createDomainForOf(pronouns, adjs, nouns, domains) {
    let finalDomain = [];
    for (const pronoun of pronouns) {
      for (const adj of adjs) {
        for (const noun of nouns) {
          for (const domain of domains) {
            finalDomain.push(
              pronoun
                .concat(adj)
                .concat(noun)
                .concat(domain)
            );
          }
        }
      }
    }
    return finalDomain;
  }

  //with for in Loop
  function createDomainForIn(pronouns, adjs, nouns, domains) {
    let finalDomain = [];

    for (const pronoun in pronouns) {
      for (const adj in adjs) {
        for (const noun in nouns) {
          for (const domain in domains) {
            finalDomain.push(
              pronouns[pronoun]
                .concat(adjs[adj])
                .concat(nouns[noun])
                .concat(domains[domain])
            );
          }
        }
      }
    }
    return finalDomain;
  }

  console.log(createDomainFor(pronouns, adjs, nouns, domains));
  console.log(createDomainForOf(pronouns, adjs, nouns, domains));
  console.log(createDomainForIn(pronouns, adjs, nouns, domains));
};
