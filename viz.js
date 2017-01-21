
// Set up route for visualization
// Router.map( function() {
//   this.route('viz', {
//     path: 'viz/:batchName',
//     waitOn: function() {
//       return Meteor.subscribe("vizData", this.params.batchName);
//     }
//   });
// });

var day = 1; //test day 1
//init: with test day 1
var instanceJSON = [{"_id":"FEqrGxg2qWvcnSasi","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["oEdzXdEbM6o7wyYF5","TP2428NEsbamnmvwf"],"startTime":"2015-08-04T17:03:12.720Z","endTime":"2015-08-04T17:03:53.503Z","endReason":"finished"},{"_id":"ZLxP5AYtik4oB3Dgo","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["JQoqYfm2BMG79MDPf","EfbMsx3XqmncstXpH"],"startTime":"2015-08-04T17:03:16.554Z","endTime":"2015-08-04T17:04:02.308Z","endReason":"finished"},{"_id":"QvXTNzmvnHuDBjjPc","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["edtBJFbpxJB7jQLTE","9oMznuhqogksvbTty"],"startTime":"2015-08-04T17:03:15.375Z","endTime":"2015-08-04T17:04:15.406Z","endReason":"abandoned"},{"_id":"G6YqfeuSg8pnrisTb","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["JeZKmXZdRgdiHQaHF","97traC2z3p5PZ27XX"],"startTime":"2015-08-04T17:03:11.640Z","endTime":"2015-08-04T17:04:16.335Z","endReason":"finished"},{"_id":"9yxKXaAKZhDeGsdPB","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["S7DpQTGMB3QHmv3wj","kfnPCXJtmFZt2YLYQ"],"startTime":"2015-08-04T17:03:13.243Z","endTime":"2015-08-04T17:04:16.645Z","endReason":"finished"},{"_id":"CiQKBFMQHgD5TQpit","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["qfK7J87D5Kk7swwc7","qyptfkyqNNMnZTF2v"],"startTime":"2015-08-04T17:03:13.087Z","endTime":"2015-08-04T17:04:16.906Z","endReason":"finished"},{"_id":"nJv5Wjpk4jaiwmFr5","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["xMn4fbXdSFQh8NKuJ","XSxvHwwNwBfusdi6R"],"startTime":"2015-08-04T17:03:12.530Z","endTime":"2015-08-04T17:04:18.037Z","endReason":"finished"},{"_id":"ay5pmpeNcwqHJ8JBH","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["2qiHdJgL4WQe5qrHQ","tWA9ZxSnKpZyWwYsQ"],"startTime":"2015-08-04T17:03:10.730Z","endTime":"2015-08-04T17:04:18.641Z","endReason":"finished"},{"_id":"HgXLQC3kDNizR3PkH","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["RzxX5wdD5d7CAaYjT","3wby46KA2teqmGccW"],"startTime":"2015-08-04T17:03:11.960Z","endTime":"2015-08-04T17:04:19.054Z","endReason":"finished"},{"_id":"xuFunjd8QnwCr9Q7o","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["Yi5onNEa2ZsPrMn2g","guqhFmibsWFJpL8Fq"],"startTime":"2015-08-04T17:03:12.151Z","endTime":"2015-08-04T17:04:21.662Z","endReason":"finished"},{"_id":"EtLqZy8nyB2wJStiC","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["xH8gnN6xZ9tWFkmrD","ZY7qP2B8GAfT5AWGZ"],"startTime":"2015-08-04T17:03:13.469Z","endTime":"2015-08-04T17:04:23.198Z","endReason":"finished"},{"_id":"JEepF8uJq4TgPAYiP","batchId":"eXzb4SmbmcZG3bYnA","treatments":["main"],"users":["JtpdkX98RtQ43648w","2a5QCF8Wdpx3nzbEc"],"startTime":"2015-08-04T17:03:12.929Z","endTime":"2015-08-04T17:04:24.015Z","endReason":"finished"}];

var gamegroupsJSON = [{"_id":"2hBJiuazhEscr5z2o","counter":12,"timestamp":"2015-08-04T19:22:31.486Z","assignments":["ZPauYm8HLvQ6YfggY","JFnenNudSmk46xK78","8THtpF9XRM3NH7pMg","ataG3er6aBkXdCyYP","xnkjEEsMjTmrHf9gH","YqwXcoLmCBcLPaiba","6ayPoFg5pvTaEha63","LRfhyDNENuJwGQhdi","GaKSZ8eiRzeqf3thD","3dLAjNzvtzfgRQMWZ","q6kPHRX45MLiWaCxS","3Bx6qDZbJTSSPZMKL","jCpkdAzvy5Kwixmqc","aWtw6xx8MLSFEf8bc","fS9ZXgRbsaLGytA9F","h7yHcaRYNRzmHkJuS","duuD6W2fKeRvEqkLp","3Jcuz66LEWAu9HMHe","pTh9ngewp7uLwYbR7","2C5FZrzbvB6eGYwD6","HxMTMK2CYuKTkr7cP","SCBjg7iMHwWcEpy3P","6YMizXtBzc4qwiAQ9","X42mwsaNC7HzfiWze","hF4EercMTYw3fhYhB","p7ozPbB9PEEAuDKrr","jXBqtshGbzu4xnHNJ","FghGemeJgbsTJFKuZ","ccg6vfc57pnCocoLk","7xv9owAJ5SWk2Nntk","XP2Jvb2b7cwXjhcvq","9ivLoYRDuEQnNj3n6","q7b3e7JYtmid88bKd","NAaKhbgtiZGrjwqZi","wSnvz2Gs53rsrvobs","KbC2nHfNvsptdNryC","PvNChdtECbSebsuLK","DdbeGyJsYHFZAiBva","Y2rjMxQEtnXwEjZvy","wyfYHprMFkYXJE5cd","ku8nCRFPTd5hox7Ns","mXZPWPB34PiRuwmF2","tnLTiJKME4NzJeG4x","Mu653qtXjM6QS5SPY","5uRCQZnHsNin364DM","ujWXqXKEh2nPCW8XT","u2dnya8mXcJXehErr","gGARX37ngZrZG9CYt","MSKMYi2DMwksYqrrr","EQ8Ajx8WNN6tq5jcP","m5rivtToeRGE2vrwo","88TeobTDSvtdGE6wT","R5wqZfxeRZbyJ79bx"],"leftOut":["KbC2nHfNvsptdNryC"],"instances":["rbwhPvrgCv8cWW7dG","xKF5wQGB5rKQZKmjv","ZQuAFxgHGDZfsD3zR","LZXg46Mm4vvAMy3b4","zw7nbdNhJYMjWGP5m","8Rwx4MvhEuvQfrPCL","WwjMdDzTnSzb4EjZw","JTomNbTZHXp5aSP9k","5ugLBztM3TJ7GuBuT","t8LgZ52feA6Z5jvP3","oS46CwKJ93fezRiF6","vhWLQ9vtc2oiL2yxM","YuzkYzESfPNJFkx88","KnaMEynYtSCPyJ52P","tFjfC5BYRar3draGm","8j3LkFjjjf8rYR7M2","tHtrJxY594Sjy67Qk","xYS7aASkF4y5fyFxC","fZFpBMTpTxbfyZQGM","xXPsdWiGGc8tBuCgw","S5X5aL4tE5yFfYvb2","ZrCHBPXtGAvAgS63o","iwxXfj9rSoEPTY5gN","SjLCaXiSJf5Hpb58a","wP4WoQbq7d5t7RH3o","XmzparFa7EJtKj649"],"batchId":"eXzb4SmbmcZG3bYnA"},{"_id":"4JuD3gdiPY6Ld9jsP","counter":20,"timestamp":"2015-08-04T17:37:12.192Z","assignments":["vJPp2RE7f3k3aRMcF","npqQeTZcFBfoAJ9FF","KPMnaYCs4cioqYDP7","5SZ9TzziqkJvDKmjC","SvnGCqktHq2XCmG9T","onmDQXHePQJbpW3Qs","T3d59JJhmAsh7QDBB","nM7Yhkq8z4qtcSBxX","DnCnY9Z6Q9HybuGtf","3J6DbqKbPF3a4vZQn","KrZsZdRDZDCtkGkAe","vFf5YXc2M29pxD3oH","YSN3uhTccpiuWiG3w","2MMNL2BnHDrKWZ7nG","qiNtAQKTnkmivARBE","8RWKDTmh6qZtzPMJq","c9BaZEdJkkML7y7So","ni6B32iarpXMeCHmp","rb72MTXzvpBXRGaLW","o9H3YPkZHn92Pr8Qv","znhAyfiZpXR2LLs4b","qjxwmL8zhwna94XFf","dATkNjuWwsFqQHhAm","PWkcLYuvHkEbfrYem","D4Wf2X9QzMhLn6ESh","oueDTvBFx7f2Mis3X","o9XHKCjnFKKSRMzdH","tNktmvGKNGtFpqhBp","BSL5EyuGm3Dy9NZ8w","bBJAsFYgmn97TQqxp","Qvnhcxhh58z7s38MK","czBCbFvYqeE4nMTjr","68Ms4vyFQvWsc8vdw","YW9A2pyWYifPRkdcy","L3wMKgv7yqybyLthx","bq9RMM4EAd6GoDikN","c23qcytjxjxFkG2N5","uSfTE6zDbaELp7R7P","4WSdD78r3gEGPwRhh","5fWhsugNvj4YBh5sQ","aY3AsWzrGf2tdLZxW","r74t7QESqtf6wmR2o","pGz9XKJMTTHyaAv3C","QeEB4CWHbTc97fgqS","dnQTvWeEuNGm52jRE","fSTukbbi9LkiCbnvv","ewQPLWFdawGShN7WH","dtkXbMnRjcdoo2phk","vcRjsZXYqurkruA6Z","sNwFq5a2DmaecsMWo","67SztgMvAC3mgavTN","paiFz6hSkFFxpgsXW","yDZgmhoZyWRWkt4pN","zyz3huyKPADT9PAZm","7DphYrHeminDMMaae","Do4d8SPNbd9Rcv2tq"],"leftOut":[],"instances":["PZBYw4E7MABtnWeha","AoNYREXa3RMQiZdB8","3McTt7oW777NNHj9Q","itoKskLxBSz3M8xsK","7xRbMh58HyqFYoPBk","NvL8ZGsu5NuqpGAtx","pKcBQ3jAP9cPfPp5n","PTBb67czjmy4Eq3iE","345FzccDngvYLAKqM","AFY6q7vmLHsmz9LwC","EqSgNKGaPGpYkEXM3","8ZkTdPpqJvxN4T2eZ","39Ybg8fnfMdzEZsmp","Y7mcW3c9am8a3YYkG","8dmyHxwcc78JwF55b","ryf3amoB9JyYWqY3D","qMtrGDyAWiEdchXna","RH8HL6BrCeoPHTYtB","GBQKKh3EbR3j3e7iG","5AWcmEAja8obAx6FA","GK7Br9w9NKs6xzbE9","98ocsF3NanpEpvtMn","ZSoFR7cmd5WqTwReB","Xyz7oNabHkhoqZZck","TJemmtnBQJ9ZtmxTY","hyMiA9fx9aAfSrgC7","BSvhFbi8DLZ8Fgz6t","a5887KtPQHK6uK6PX"],"batchId":"eXzb4SmbmcZG3bYnA"}];

var linksJSON = [{"userId":"oEdzXdEbM6o7wyYF5","source":0,"target":40,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":40,"target":70,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":70,"target":81,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":81,"target":124,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":124,"target":136,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":136,"target":171,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":171,"target":188,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":188,"target":222,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":222,"target":251,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":251,"target":281,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":281,"target":303,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":303,"target":340,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":340,"target":348,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":348,"target":380,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":380,"target":405,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":405,"target":432,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":432,"target":465,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":465,"target":495,"value":1},{"userId":"oEdzXdEbM6o7wyYF5","source":495,"target":538,"value":1},{"userId":"TP2428NEsbamnmvwf","source":0,"target":31,"value":1},{"userId":"TP2428NEsbamnmvwf","source":31,"target":60,"value":1},{"userId":"TP2428NEsbamnmvwf","source":60,"target":89,"value":1},{"userId":"TP2428NEsbamnmvwf","source":89,"target":121,"value":1},{"userId":"TP2428NEsbamnmvwf","source":121,"target":142,"value":1},{"userId":"TP2428NEsbamnmvwf","source":142,"target":167,"value":1},{"userId":"TP2428NEsbamnmvwf","source":167,"target":204,"value":1},{"userId":"TP2428NEsbamnmvwf","source":204,"target":238,"value":1},{"userId":"TP2428NEsbamnmvwf","source":238,"target":254,"value":1},{"userId":"TP2428NEsbamnmvwf","source":254,"target":282,"value":1},{"userId":"TP2428NEsbamnmvwf","source":282,"target":315,"value":1},{"userId":"TP2428NEsbamnmvwf","source":315,"target":326,"value":1},{"userId":"TP2428NEsbamnmvwf","source":326,"target":361,"value":1},{"userId":"TP2428NEsbamnmvwf","source":361,"target":383,"value":1},{"userId":"TP2428NEsbamnmvwf","source":383,"target":402,"value":1},{"userId":"TP2428NEsbamnmvwf","source":402,"target":431,"value":1},{"userId":"TP2428NEsbamnmvwf","source":431,"target":459,"value":1},{"userId":"TP2428NEsbamnmvwf","source":459,"target":503,"value":1},{"userId":"TP2428NEsbamnmvwf","source":503,"target":516,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":1,"target":51,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":51,"target":75,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":75,"target":89,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":89,"target":120,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":120,"target":148,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":148,"target":196,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":196,"target":233,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":233,"target":266,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":266,"target":275,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":275,"target":306,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":306,"target":344,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":344,"target":369,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":369,"target":377,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":377,"target":413,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":413,"target":445,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":445,"target":456,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":456,"target":503,"value":1},{"userId":"JQoqYfm2BMG79MDPf","source":503,"target":531,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":1,"target":47,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":47,"target":63,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":63,"target":81,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":81,"target":107,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":107,"target":140,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":140,"target":183,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":183,"target":196,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":196,"target":232,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":232,"target":260,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":260,"target":290,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":290,"target":308,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":308,"target":321,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":321,"target":355,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":355,"target":398,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":398,"target":427,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":427,"target":455,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":455,"target":479,"value":1},{"userId":"EfbMsx3XqmncstXpH","source":479,"target":500,"value":1}];

var usersJSON = ["oEdzXdEbM6o7wyYF5","TP2428NEsbamnmvwf","JQoqYfm2BMG79MDPf","EfbMsx3XqmncstXpH","edtBJFbpxJB7jQLTE","9oMznuhqogksvbTty","JeZKmXZdRgdiHQaHF","97traC2z3p5PZ27XX","S7DpQTGMB3QHmv3wj","kfnPCXJtmFZt2YLYQ","qfK7J87D5Kk7swwc7","qyptfkyqNNMnZTF2v","xMn4fbXdSFQh8NKuJ","XSxvHwwNwBfusdi6R","2qiHdJgL4WQe5qrHQ","tWA9ZxSnKpZyWwYsQ","RzxX5wdD5d7CAaYjT","3wby46KA2teqmGccW","Yi5onNEa2ZsPrMn2g","guqhFmibsWFJpL8Fq","xH8gnN6xZ9tWFkmrD","ZY7qP2B8GAfT5AWGZ","JtpdkX98RtQ43648w","2a5QCF8Wdpx3nzbEc","ACmCYtCtP5CgznfwC","83aLGCKsgKvC3pkJN","EqbbmngPfZBEmPTzq","EKkrMpMqy2PRLm7ur","jm4za6kMb6JSQMoo5","GwfkQ6SGEuBj2RMoW","dvhRkrMPQ9RCj4NNr","2bqdZ89qdpa8PhJCg","7SuwNkTzDH5sA5JDC","2xgTQpgmHLiTHmpsq","xnAjMcWaFRpfBbukz","Q6knaWEruc6BDPQT7","LHDAKffMp8XBLFz3g","BXpopjp8tbALotvvj","dvv2yNXCzC6AYnn2K","HvTBMDLQsN6XJ9grX","txQxDcqhuXxmEXyWG","kHR5CKiiL9FYWGwqn","Qi3GiWFco4Qh355LQ","m8qY5xCxdBqLSSRWW","YAmgmnEPMJaKZXNtk","Y5FKzx7Pvme9GpeF7","PvQ8B5kuA9Fbq9N59","PJmJgrqusFZ8KRShQ","7CHpY4setLKb9ssnN","hbud2J3YvitEhj4xZ","58iSZSetxTXhF5hrB","uvDQCrGsLGsAKGExf","tSEAiJdi4ZfwHJqF8","f4pnrgcTtBWuEL9Mn","Mn8Mhh4DdiW724yZ3","TBNi2gFYKbKXg8dNv","5oJARAB4mRwbQDKgF","gEZaFShQ8eoR2BRAt","jKQrDBFrWeEneJ9Sh","Lb3ehSYefBwcE58qa","3bwXhLyfxfFpnNaxY","vnPdHD2rfeQuDRy4r","tC6Zy7o6EXbD8Q3ya","7u66LoLjAZqH5GbfN","YnGSLr6Dq87b6nX9F","uzwvxb7zCWwhaevZE","XTHWWFs9M9DnbR62K","KMjaB4v47Fwffqriy","dDovRtfoCyNLTLn7L","yuerkqbm7ioDySbat","mLYACvRN7p3Pjwkm5","bgeGZacDPCTYTS5nc","EAYCNB3JPXofxdCgd","carmvfvtcMyEF8H7d","E6zukoQyB4Sd8KNLo","DAqhvBTbwnGRzWL9F","fgBYMQdNMmzDawQRF","KDajqFq67D4HmjgFi","m2qCcsBQ5PodLDdSa","8MA6Hc3GAcbHz3R6A","MS7JQFicG4pNdGyq8","BAYaXkN4SDLPfekqh","PdrT7m7MtTSSHxGce","wcDZ36ubBrqbAckBb","B4byWhnSTJxLvFfkx","2ZxgYsamPEfwHW2FG","tzL2T9dTkXA87Wgjj","HcEWQutubZqAdwxt5","uNhSECqzFXeszatS6","Rg4meqnQPpdmTMgEj","iCjN4ff8vv8bLuF7b","3tsom2qnohxx8wqEH","ofwCnJt6LSqif3AH3","oEPKyQk6nXhA4FF2X","pmZwmTAc4jasd5MsF","2JL4pHMmPJRnrcQNh","WCs6DEo3ieusQdkRB","ZDsXeXNyYGrPrWv85","JTbimyxH8iS7Mr394","Tc45bCturosac5S5F","GSk5nyr98hHRBRmX6","6T7FSL3vrpdoakTLm","XnkCLaMnZfNN9CYru","6ucqMrmoxqof8DKEd","6LhxgMZpkBtWu5S2E","fHYdRD9XuSDiDhZek","t5q8PtjTJ5tBCCA48","WYXQudKcy8KMRqPQF","pM9zJgZmZh9S2nJbR","aWrQZTZhJncc26wvP","C3pmKynLhdJMGdwf9","4TKR4fMe232m8KrRp","Ra7AoE9MgzhRNNyqm"];

var actionsJSON = [{"_id":"648nSBHuwqJBNY3fp","userId":"xH8gnN6xZ9tWFkmrD","roundIndex":1,"_groupId":"2Avu9QcayRQTnJ75p","timestamp":"2015-08-04T17:09:02.304Z","action":1},{"_id":"cgx95ZT7p4pgMKp6w","userId":"PJmJgrqusFZ8KRShQ","roundIndex":1,"_groupId":"2Avu9QcayRQTnJ75p","timestamp":"2015-08-04T17:09:04.686Z","action":1},{"_id":"Xi2ofrdYNYvKMXjPr","userId":"Ra7AoE9MgzhRNNyqm","roundIndex":1,"_groupId":"2GApep9S3Bw8Kv7MT","timestamp":"2015-08-04T19:38:58.731Z","action":1},{"_id":"bRgSqdgbcKWEDGmLE","userId":"MS7JQFicG4pNdGyq8","roundIndex":1,"_groupId":"2GApep9S3Bw8Kv7MT","timestamp":"2015-08-04T19:38:55.647Z","action":1},{"_id":"2PhYdsmuS4sPmSX9H","userId":"bgeGZacDPCTYTS5nc","roundIndex":1,"_groupId":"2H8GLgcCAzmzPpM9y","timestamp":"2015-08-04T19:18:43.611Z","action":1},{"_id":"R5eW9cT5eoKjcmfPL","userId":"GSk5nyr98hHRBRmX6","roundIndex":1,"_groupId":"2H8GLgcCAzmzPpM9y","timestamp":"2015-08-04T19:18:36.791Z","action":1},{"_id":"9JEfF6L3bjeG297ir","userId":"Qi3GiWFco4Qh355LQ","roundIndex":1,"_groupId":"2KidiCPjhf8Bcgqr6","timestamp":"2015-08-04T17:17:18.523Z","action":1},{"_id":"fjjLoqJTjx3aFcLYJ","userId":"hbud2J3YvitEhj4xZ","roundIndex":1,"_groupId":"2KidiCPjhf8Bcgqr6","timestamp":"2015-08-04T17:17:19.195Z","action":1},{"_id":"BkAQvDWzd46aDrNSv","userId":"LHDAKffMp8XBLFz3g","roundIndex":1,"_groupId":"2Rp5QBmXdNKRczwmK","timestamp":"2015-08-04T17:17:14.594Z","action":2},{"_id":"KtiJ332yh8gBsdJPc","userId":"xMn4fbXdSFQh8NKuJ","roundIndex":1,"_groupId":"2Rp5QBmXdNKRczwmK","timestamp":"2015-08-04T17:17:14.186Z","action":1},{"_id":"A6iu6ikCnCGoYjwHt","userId":"Lb3ehSYefBwcE58qa","roundIndex":1,"_groupId":"2SgKCDFm8s3gZKsDs","timestamp":"2015-08-04T19:26:24.482Z","action":1},{"_id":"zn8u4ZbkQi9FR5wrm","userId":"XnkCLaMnZfNN9CYru","roundIndex":1,"_groupId":"2SgKCDFm8s3gZKsDs","timestamp":"2015-08-04T19:26:25.556Z","action":1},{"_id":"ZCNj3yjGcrmPdSRHP","userId":"PdrT7m7MtTSSHxGce","roundIndex":1,"_groupId":"2T2mKyxQtSCPAaaHZ","timestamp":"2015-08-04T19:16:43.481Z","action":1},{"_id":"ndfqYbuzEWFJB7NsB","userId":"yuerkqbm7ioDySbat","roundIndex":1,"_groupId":"2T2mKyxQtSCPAaaHZ","timestamp":"2015-08-04T19:16:44.623Z","action":1},{"_id":"8AJCDG7PfKK27xq3H","userId":"WCs6DEo3ieusQdkRB","roundIndex":1,"_groupId":"2TGj3Kt9sa5K4eL3b","timestamp":"2015-08-04T19:24:27.154Z","action":1},{"_id":"8Qgx6NaK6F4T2YSYr","userId":"GSk5nyr98hHRBRmX6","roundIndex":1,"_groupId":"2TGj3Kt9sa5K4eL3b","timestamp":"2015-08-04T19:24:25.773Z","action":1},{"_id":"75GYADGD8TxKpSHZy","userId":"dDovRtfoCyNLTLn7L","roundIndex":1,"_groupId":"2YWANLvoXdAgx8duq","timestamp":"2015-08-04T19:18:32.946Z","action":1},{"_id":"NqtZDyuLa868tAZQP","userId":"tzL2T9dTkXA87Wgjj","roundIndex":1,"_groupId":"2YWANLvoXdAgx8duq","timestamp":"2015-08-04T19:18:39.496Z","action":1},{"_id":"LiQ4Jn54s4uarymKQ","userId":"guqhFmibsWFJpL8Fq","roundIndex":1,"_groupId":"2ZmZwTQyDYqDaaTYH","timestamp":"2015-08-04T17:33:33.478Z","action":1},{"_id":"kec2eNG4x5Q9KPqgJ","userId":"Y5FKzx7Pvme9GpeF7","roundIndex":1,"_groupId":"2ZmZwTQyDYqDaaTYH","timestamp":"2015-08-04T17:33:32.592Z","action":1},{"_id":"gkZdAoXPN9yEaszBK","userId":"2qiHdJgL4WQe5qrHQ","roundIndex":1,"_groupId":"2aKRfzs2RZHgNzd2c","timestamp":"2015-08-04T17:24:41.164Z","action":1},{"_id":"qRwysTbMhdTNSxTY6","userId":"guqhFmibsWFJpL8Fq","roundIndex":1,"_groupId":"2aKRfzs2RZHgNzd2c","timestamp":"2015-08-04T17:24:42.361Z","action":1},{"_id":"SEYWYkyTWr6DY4fsu","userId":"pmZwmTAc4jasd5MsF","roundIndex":1,"_groupId":"2eZiHrTKn6xSjPfWw","timestamp":"2015-08-04T19:32:34.217Z","action":1},{"_id":"xDWBc3hvfhJGWdTDh","userId":"MS7JQFicG4pNdGyq8","roundIndex":1,"_groupId":"2eZiHrTKn6xSjPfWw","timestamp":"2015-08-04T19:32:30.987Z","action":1},{"_id":"QNn3Pm55ccpfnXT87","userId":"Rg4meqnQPpdmTMgEj","roundIndex":1,"_groupId":"2gfmodbsEYZniSwDZ","timestamp":"2015-08-04T19:18:35.963Z","action":1},{"_id":"kLz5ioJBsMa9TMjKi","userId":"oEPKyQk6nXhA4FF2X","roundIndex":1,"_groupId":"2gfmodbsEYZniSwDZ","timestamp":"2015-08-04T19:18:36.487Z","action":1},{"_id":"KaJeboTDmgwvzFxPd","userId":"JQoqYfm2BMG79MDPf","roundIndex":1,"_groupId":"2tc4K2AxC468phkFs","timestamp":"2015-08-04T17:30:05.468Z","action":1},{"_id":"LqHTXsuK3o2dZzEYW","userId":"2qiHdJgL4WQe5qrHQ","roundIndex":1,"_groupId":"2tc4K2AxC468phkFs","timestamp":"2015-08-04T17:30:05.898Z","action":1},{"_id":"PhbELbG6jWjGA8fKu","userId":"2xgTQpgmHLiTHmpsq","roundIndex":1,"_groupId":"2uF5v9B3MvHx7w8YE","timestamp":"2015-08-04T17:20:49.287Z","action":1},{"_id":"e5ZHRSAgcFEtPhnCL","userId":"PvQ8B5kuA9Fbq9N59","roundIndex":1,"_groupId":"2uF5v9B3MvHx7w8YE","timestamp":"2015-08-04T17:20:49.349Z","action":1},{"_id":"LARzAHciHFGRuPK5f","userId":"jKQrDBFrWeEneJ9Sh","roundIndex":1,"_groupId":"2uxYM97wTien2e48o","timestamp":"2015-08-04T19:09:02.535Z","action":1},{"_id":"ncBMYGrMCX2CP2Mxv","userId":"XTHWWFs9M9DnbR62K","roundIndex":1,"_groupId":"2uxYM97wTien2e48o","timestamp":"2015-08-04T19:09:03.508Z","action":1},{"_id":"TM8D7r5iA8ygPX8Gc","userId":"97traC2z3p5PZ27XX","roundIndex":1,"_groupId":"2vgMprEr3WGS8g9NN","timestamp":"2015-08-04T17:35:20.763Z","action":1},{"_id":"zju8nbL8wPXi2qpAQ","userId":"Mn8Mhh4DdiW724yZ3","roundIndex":1,"_groupId":"2vgMprEr3WGS8g9NN","timestamp":"2015-08-04T17:35:20.903Z","action":2},{"_id":"4qdEKwBgMwTdcGJGn","userId":"EAYCNB3JPXofxdCgd","roundIndex":1,"_groupId":"2wSHGFdoBck2DHPyP","timestamp":"2015-08-04T19:15:13.495Z","action":1},{"_id":"teXZxMDu3PXFEgEBr","userId":"m2qCcsBQ5PodLDdSa","roundIndex":1,"_groupId":"2wSHGFdoBck2DHPyP","timestamp":"2015-08-04T19:15:06.589Z","action":1},{"_id":"FDDRh4sfnzphezEXK","userId":"Tc45bCturosac5S5F","roundIndex":1,"_groupId":"2xRxyr7iG3ZSg8Jw6","timestamp":"2015-08-04T19:04:47.156Z","action":1},{"_id":"jcM4J89Bj6eHwPhrQ","userId":"2ZxgYsamPEfwHW2FG","roundIndex":1,"_groupId":"2xRxyr7iG3ZSg8Jw6","timestamp":"2015-08-04T19:04:45.443Z","action":1},{"_id":"iEW4cQznQESNiCDPy","userId":"m2qCcsBQ5PodLDdSa","roundIndex":1,"_groupId":"32Dq4nQF4LiTr3o3S","timestamp":"2015-08-04T19:36:42.266Z","action":1},{"_id":"woA6QtMwDg4TvEvyd","userId":"mLYACvRN7p3Pjwkm5","roundIndex":1,"_groupId":"32Dq4nQF4LiTr3o3S","timestamp":"2015-08-04T19:36:44.326Z","action":1},{"_id":"n2edj4WhoCaAbbckt","userId":"xnAjMcWaFRpfBbukz","roundIndex":1,"_groupId":"32NHH7i9ydPSRBTDi","timestamp":"2015-08-04T17:20:50.391Z","action":1},{"_id":"xrumQdbFZSSnKtTGD","userId":"EfbMsx3XqmncstXpH","roundIndex":1,"_groupId":"32NHH7i9ydPSRBTDi","timestamp":"2015-08-04T17:20:59.586Z","action":1},{"_id":"dQrZmBNPwMkkpNN7T","userId":"XSxvHwwNwBfusdi6R","roundIndex":1,"_groupId":"345FzccDngvYLAKqM","timestamp":"2015-08-04T17:37:22.613Z","action":1},{"_id":"vLos683dpSP8oCFff","userId":"YAmgmnEPMJaKZXNtk","roundIndex":1,"_groupId":"345FzccDngvYLAKqM","timestamp":"2015-08-04T17:37:23.599Z","action":2},{"_id":"aaNPBuupyuNizHbhf","userId":"KMjaB4v47Fwffqriy","roundIndex":1,"_groupId":"37oMJEupHX55DfqM6","timestamp":"2015-08-04T19:36:43.814Z","action":1},{"_id":"pSyK94jvwHEDdpbtE","userId":"tC6Zy7o6EXbD8Q3ya","roundIndex":1,"_groupId":"37oMJEupHX55DfqM6","timestamp":"2015-08-04T19:36:43.647Z","action":1},{"_id":"HMv7Cs8Ch6f8ZNYnC","userId":"83aLGCKsgKvC3pkJN","roundIndex":1,"_groupId":"39Ybg8fnfMdzEZsmp","timestamp":"2015-08-04T17:37:23.041Z","action":1},{"_id":"LW6ZMy5XReWcbrrjm","userId":"TP2428NEsbamnmvwf","roundIndex":1,"_groupId":"39Ybg8fnfMdzEZsmp","timestamp":"2015-08-04T17:37:23.392Z","action":1},{"_id":"dqowyQwuCqN7EERAp","userId":"WCs6DEo3ieusQdkRB","roundIndex":1,"_groupId":"3AZrG5nDB5snLjQHf","timestamp":"2015-08-04T19:07:11.847Z","action":1},{"_id":"izPDevWdaCovyJDpq","userId":"YnGSLr6Dq87b6nX9F","roundIndex":1,"_groupId":"3AZrG5nDB5snLjQHf","timestamp":"2015-08-04T19:07:13.360Z","action":1},{"_id":"qZ5B8PKghYBC3Yxew","userId":"bgeGZacDPCTYTS5nc","roundIndex":1,"_groupId":"3Adf3WHzZzWYsSCtD","timestamp":"2015-08-04T19:32:30.135Z","action":1},{"_id":"td452psPeut5fYSJT","userId":"Tc45bCturosac5S5F","roundIndex":1,"_groupId":"3Adf3WHzZzWYsSCtD","timestamp":"2015-08-04T19:32:31.592Z","action":1},{"_id":"QeuZkugQuiQujXBEX","userId":"xH8gnN6xZ9tWFkmrD","roundIndex":1,"_groupId":"3M3jXxNHNBXbAEsoT","timestamp":"2015-08-04T17:13:40.263Z","action":1},{"_id":"bs5P8dciHJd8fDcTx","userId":"EKkrMpMqy2PRLm7ur","roundIndex":1,"_groupId":"3M3jXxNHNBXbAEsoT","timestamp":"2015-08-04T17:13:39.928Z","action":1},{"_id":"XTxoCcyexTomWEjiF","userId":"2xgTQpgmHLiTHmpsq","roundIndex":1,"_groupId":"3McTt7oW777NNHj9Q","timestamp":"2015-08-04T17:37:21.200Z","action":1},{"_id":"mHdqkywcEgQew6aGi","userId":"97traC2z3p5PZ27XX","roundIndex":1,"_groupId":"3McTt7oW777NNHj9Q","timestamp":"2015-08-04T17:37:21.220Z","action":1},{"_id":"EGrBJGZxbJCn6fbcN","userId":"fHYdRD9XuSDiDhZek","roundIndex":1,"_groupId":"3P5KwHetAnJZ29RZv","timestamp":"2015-08-04T19:32:40.996Z","action":1},{"_id":"ELs8zXfZbqtQSryAy","userId":"XnkCLaMnZfNN9CYru","roundIndex":1,"_groupId":"3P5KwHetAnJZ29RZv","timestamp":"2015-08-04T19:32:33.604Z","action":1},{"_id":"3GBaED3zaG3kvPDKE","userId":"YnGSLr6Dq87b6nX9F","roundIndex":1,"_groupId":"3QjrBKwCMwSKFfQjW","timestamp":"2015-08-04T19:30:38.958Z","action":1},{"_id":"ocz5duLdcY4C2kPeQ","userId":"jKQrDBFrWeEneJ9Sh","roundIndex":1,"_groupId":"3QjrBKwCMwSKFfQjW","timestamp":"2015-08-04T19:30:39.090Z","action":1},{"_id":"ZkmpHDXQmuMFpSwHd","userId":"S7DpQTGMB3QHmv3wj","roundIndex":1,"_groupId":"3WXMiD6c2eFZgrdH3","timestamp":"2015-08-04T17:11:59.008Z","action":1},{"_id":"kW3a7QNKr66jcpdQ9","userId":"uvDQCrGsLGsAKGExf","roundIndex":1,"_groupId":"3WXMiD6c2eFZgrdH3","timestamp":"2015-08-04T17:11:57.697Z","action":1},{"_id":"KFn7Jn4Wadd3KDYY3","userId":"vnPdHD2rfeQuDRy4r","roundIndex":1,"_groupId":"3XKR2wP4ffGGwmreF","timestamp":"2015-08-04T19:00:01.456Z","action":1},{"_id":"Px9nRf3ZqiATTC9qc","userId":"3bwXhLyfxfFpnNaxY","roundIndex":1,"_groupId":"3XKR2wP4ffGGwmreF","timestamp":"2015-08-04T19:00:00.608Z","action":1},{"_id":"4fnZbAweoXg4KSgwp","userId":"XTHWWFs9M9DnbR62K","roundIndex":1,"_groupId":"3Y8sdjw7z5bNNREvL","timestamp":"2015-08-04T19:18:31.636Z","action":1},{"_id":"4jMZ72MpymeNhmGAX","userId":"JTbimyxH8iS7Mr394","roundIndex":1,"_groupId":"3Y8sdjw7z5bNNREvL","timestamp":"2015-08-04T19:18:39.559Z","action":2},{"_id":"7aDcMawc7ZZSPcRM4","userId":"bgeGZacDPCTYTS5nc","roundIndex":1,"_groupId":"3YFHZ74pvyzrraMq4","timestamp":"2015-08-04T19:24:24.170Z","action":1},{"_id":"TiCyj3p9nWfgi6FBn","userId":"Ra7AoE9MgzhRNNyqm","roundIndex":1,"_groupId":"3YFHZ74pvyzrraMq4","timestamp":"2015-08-04T19:24:25.276Z","action":2},{"_id":"GDdk7sNQWwpKy4knw","userId":"fgBYMQdNMmzDawQRF","roundIndex":1,"_groupId":"3Yzgc6fyh2RFniLWR","timestamp":"2015-08-04T19:02:07.746Z","action":1},{"_id":"PgZ74b3X8sHQD8KoJ","userId":"B4byWhnSTJxLvFfkx","roundIndex":1,"_groupId":"3Yzgc6fyh2RFniLWR","timestamp":"2015-08-04T19:02:07.747Z","action":1},{"_id":"hPJ3g8xDfPA852y4u","userId":"edtBJFbpxJB7jQLTE","roundIndex":1,"_groupId":"3cDY7qeXMz4tRBrXB","timestamp":"2015-08-04T17:18:59.684Z","action":1},{"_id":"wJpxvitHpnk7FvMAL","userId":"PvQ8B5kuA9Fbq9N59","roundIndex":1,"_groupId":"3cDY7qeXMz4tRBrXB","timestamp":"2015-08-04T17:18:57.792Z","action":1},{"_id":"hXFDyd3JD3MLb3HwB","userId":"XTHWWFs9M9DnbR62K","roundIndex":1,"_groupId":"3d7FrXyYz6fQHAe7A","timestamp":"2015-08-04T19:11:21.562Z","action":1},{"_id":"t2boWQ3psnvhrSnjw","userId":"ZDsXeXNyYGrPrWv85","roundIndex":1,"_groupId":"3d7FrXyYz6fQHAe7A","timestamp":"2015-08-04T19:11:23.049Z","action":1},{"_id":"6nLZF8ywMNMe9zS82","userId":"jm4za6kMb6JSQMoo5","roundIndex":1,"_groupId":"3ipZ6gP9gM8j4fYFN","timestamp":"2015-08-04T17:28:20.429Z","action":1},{"_id":"ME2M5ozsYndnzrFyT","userId":"f4pnrgcTtBWuEL9Mn","roundIndex":1,"_groupId":"3ipZ6gP9gM8j4fYFN","timestamp":"2015-08-04T17:28:18.918Z","action":1},{"_id":"J2ZHJsBBxL5auMfLZ","userId":"tzL2T9dTkXA87Wgjj","roundIndex":1,"_groupId":"3qhqDk6XyRA95HgC6","timestamp":"2015-08-04T19:32:37.424Z","action":1},{"_id":"gSBitW5k4zRhMsx2F","userId":"WYXQudKcy8KMRqPQF","roundIndex":1,"_groupId":"3qhqDk6XyRA95HgC6","timestamp":"2015-08-04T19:32:31.881Z","action":1},{"_id":"NjchBwPA7DrzZZu3u","userId":"oEPKyQk6nXhA4FF2X","roundIndex":1,"_groupId":"3s3peE9LaquLCveRv","timestamp":"2015-08-04T19:07:08.944Z","action":1},{"_id":"kM4xPcTsbJHtQjDtC","userId":"HcEWQutubZqAdwxt5","roundIndex":1,"_groupId":"3s3peE9LaquLCveRv","timestamp":"2015-08-04T19:07:19.471Z","action":1},{"_id":"9JhSBDoY2pT6Gfat4","userId":"6T7FSL3vrpdoakTLm","roundIndex":1,"_groupId":"3s7oWzQyNfsXE7t8X","timestamp":"2015-08-04T19:02:08.708Z","action":2},{"_id":"RzfWoh9fDeT9759B9","userId":"oEPKyQk6nXhA4FF2X","roundIndex":1,"_groupId":"3s7oWzQyNfsXE7t8X","timestamp":"2015-08-04T19:02:09.135Z","action":1},{"_id":"yLDws96N4YvHnkdbH","userId":"dvv2yNXCzC6AYnn2K","roundIndex":1,"_groupId":"3sCF77BAXN3GAZ8Ku","timestamp":"2015-08-04T17:30:08.451Z","action":2},{"_id":"z8BsxB8WcP7g3ea2D","userId":"3wby46KA2teqmGccW","roundIndex":1,"_groupId":"3sCF77BAXN3GAZ8Ku","timestamp":"2015-08-04T17:30:05.590Z","action":1},{"_id":"Gc6dsdbBGxFKdxnfx","userId":"tSEAiJdi4ZfwHJqF8","roundIndex":1,"_groupId":"3v7MdT7wpc5GjTWZe","timestamp":"2015-08-04T17:18:56.179Z","action":1},{"_id":"sAgqNTn9dj4uNivY3","userId":"kHR5CKiiL9FYWGwqn","roundIndex":1,"_groupId":"3v7MdT7wpc5GjTWZe","timestamp":"2015-08-04T17:18:58.980Z","action":1},{"_id":"ZqFjbPs48PesLhSG3","userId":"dvhRkrMPQ9RCj4NNr","roundIndex":1,"_groupId":"44SKbSqt72aM6dCho","timestamp":"2015-08-04T17:13:44.378Z","action":1},{"_id":"exu2Eg37rGseHzst4","userId":"PvQ8B5kuA9Fbq9N59","roundIndex":1,"_groupId":"44SKbSqt72aM6dCho","timestamp":"2015-08-04T17:13:46.612Z","action":1},{"_id":"8T5CJ4JGkn7998zbM","userId":"HvTBMDLQsN6XJ9grX","roundIndex":1,"_groupId":"44pX5gnJoo5cAb8iR","timestamp":"2015-08-04T17:24:39.329Z","action":1},{"_id":"sDJf3G52JDsBEf37P","userId":"kHR5CKiiL9FYWGwqn","roundIndex":1,"_groupId":"44pX5gnJoo5cAb8iR","timestamp":"2015-08-04T17:24:42.353Z","action":1},{"_id":"EnJckHY8wDZ53zw9w","userId":"jKQrDBFrWeEneJ9Sh","roundIndex":1,"_groupId":"45MKXGyvw6ddQp74p","timestamp":"2015-08-04T19:32:30.607Z","action":1},{"_id":"nfi3qx3xdAyzQAKNq","userId":"3bwXhLyfxfFpnNaxY","roundIndex":1,"_groupId":"45MKXGyvw6ddQp74p","timestamp":"2015-08-04T19:32:32.494Z","action":1},{"_id":"mfiAu7KkWTzQcspXW","userId":"uNhSECqzFXeszatS6","roundIndex":1,"_groupId":"4DLHskXeFtYzNA36h","timestamp":"2015-08-04T19:13:21.435Z","action":1},{"_id":"nXYYrBz6ZycwYQpvh","userId":"iCjN4ff8vv8bLuF7b","roundIndex":1,"_groupId":"4DLHskXeFtYzNA36h","timestamp":"2015-08-04T19:13:20.774Z","action":1},{"_id":"QJzbMwYXTBX3gtMdW","userId":"HcEWQutubZqAdwxt5","roundIndex":1,"_groupId":"4JmTBbPRm9JaoMiYA","timestamp":"2015-08-04T19:26:25.278Z","action":1},{"_id":"xXWdq42EN2YjcCTaw","userId":"EAYCNB3JPXofxdCgd","roundIndex":1,"_groupId":"4JmTBbPRm9JaoMiYA","timestamp":"2015-08-04T19:26:23.343Z","action":1},{"_id":"7TjPTRdGtxtKNDiFL","userId":"dDovRtfoCyNLTLn7L","roundIndex":1,"_groupId":"4KctCx2iJk9naJWyx","timestamp":"2015-08-04T19:13:20.050Z","action":1},{"_id":"Bhmf9PP6ExS4L5Sw5","userId":"vnPdHD2rfeQuDRy4r","roundIndex":1,"_groupId":"4KctCx2iJk9naJWyx","timestamp":"2015-08-04T19:13:20.394Z","action":1},{"_id":"EwQXj8hkuwrZg6eP7","userId":"aWrQZTZhJncc26wvP","roundIndex":1,"_groupId":"4MKycy2p8MgA49q9y","timestamp":"2015-08-04T19:38:52.006Z","action":1},{"_id":"LWYJw7Kgh9pNbL6eR","userId":"Lb3ehSYefBwcE58qa","roundIndex":1,"_groupId":"4MKycy2p8MgA49q9y","timestamp":"2015-08-04T19:38:53.679Z","action":1},{"_id":"PjhZmdPTL2Zidqoro","userId":"3wby46KA2teqmGccW","roundIndex":1,"_groupId":"4NY6uqhhF9tN7d5dc","timestamp":"2015-08-04T17:20:48.412Z","action":1},{"_id":"XHCroq8MyeH3Bsx2S","userId":"PJmJgrqusFZ8KRShQ","roundIndex":1,"_groupId":"4NY6uqhhF9tN7d5dc","timestamp":"2015-08-04T17:20:46.095Z","action":1},{"_id":"WZRtLfoPSxL44vRQA","userId":"EfbMsx3XqmncstXpH","roundIndex":1,"_groupId":"4NwrFFutWZDjCfQKT","timestamp":"2015-08-04T17:05:20.551Z","action":1},{"_id":"pNb6JYb4dYXfcFyJT","userId":"2bqdZ89qdpa8PhJCg","roundIndex":1,"_groupId":"4NwrFFutWZDjCfQKT","timestamp":"2015-08-04T17:05:25.183Z","action":1},{"_id":"E35gMR3vqK8dXzdMk","userId":"pmZwmTAc4jasd5MsF","roundIndex":1,"_groupId":"4RFHFiSEePJyc3soo","timestamp":"2015-08-04T19:07:15.748Z","action":1},{"_id":"Lzk9ipkrw9iF8gez3","userId":"DAqhvBTbwnGRzWL9F","roundIndex":1,"_groupId":"4RFHFiSEePJyc3soo","timestamp":"2015-08-04T19:07:16.458Z","action":1},{"_id":"edbExT3HyzisCxp2a","userId":"JtpdkX98RtQ43648w","roundIndex":1,"_groupId":"4Td7CGgAhcARjiXCc","timestamp":"2015-08-04T17:07:27.106Z","action":2},{"_id":"s8HqW4s6nXzyvPaes","userId":"EqbbmngPfZBEmPTzq","roundIndex":1,"_groupId":"4Td7CGgAhcARjiXCc","timestamp":"2015-08-04T17:07:27.674Z","action":1},{"_id":"jJiimbnuBQsX3Cxpj","userId":"uNhSECqzFXeszatS6","roundIndex":1,"_groupId":"4WivcFRWQY29HTzrm","timestamp":"2015-08-04T19:32:30.288Z","action":1},{"_id":"x2e4vkYEb7qrknG4S","userId":"2JL4pHMmPJRnrcQNh","roundIndex":1,"_groupId":"4WivcFRWQY29HTzrm","timestamp":"2015-08-04T19:32:30.670Z","action":1},{"_id":"YaCpjxKQhDymekXTc","userId":"uNhSECqzFXeszatS6","roundIndex":1,"_groupId":"4Z7A5qqL4gmQAjx4N","timestamp":"2015-08-04T19:07:10.789Z","action":1},{"_id":"ej36wwr8m8TzafBhq","userId":"fgBYMQdNMmzDawQRF","roundIndex":1,"_groupId":"4Z7A5qqL4gmQAjx4N","timestamp":"2015-08-04T19:07:09.699Z","action":1},{"_id":"wpFzYsycF5GtwJmF9","userId":"pmZwmTAc4jasd5MsF","roundIndex":1,"_groupId":"4brHceWNSaNGeH4GK","timestamp":"2015-08-04T19:26:46.566Z","action":1},{"_id":"xtGfBWmpAEKYctggr","userId":"2ZxgYsamPEfwHW2FG","roundIndex":1,"_groupId":"4brHceWNSaNGeH4GK","timestamp":"2015-08-04T19:26:28.538Z","action":1},{"_id":"KPK5fxANP5C6JLfgr","userId":"PdrT7m7MtTSSHxGce","roundIndex":1,"_groupId":"4wMtz6ccH2cExhPc8","timestamp":"2015-08-04T19:20:36.496Z","action":1},{"_id":"fgPi45eB8XkEGp9ce","userId":"Rg4meqnQPpdmTMgEj","roundIndex":1,"_groupId":"4wMtz6ccH2cExhPc8","timestamp":"2015-08-04T19:20:34.347Z","action":1},{"_id":"2fBdSfhtuwKtfNMj3","userId":"WCs6DEo3ieusQdkRB","roundIndex":1,"_groupId":"4xRJtBknxTohZGcMA","timestamp":"2015-08-04T19:26:23.755Z","action":1},{"_id":"QsKCd3SRzGuXkQK5F","userId":"tC6Zy7o6EXbD8Q3ya","roundIndex":1,"_groupId":"4xRJtBknxTohZGcMA","timestamp":"2015-08-04T19:26:23.568Z","action":1},{"_id":"HsaPhYGY5EgGh6HW2","userId":"S7DpQTGMB3QHmv3wj","roundIndex":1,"_groupId":"4yjQB5MbrRHivkM6v","timestamp":"2015-08-04T17:08:56.678Z","action":1},{"_id":"cxKipGuDBmLHJkpQG","userId":"JtpdkX98RtQ43648w","roundIndex":1,"_groupId":"4yjQB5MbrRHivkM6v","timestamp":"2015-08-04T17:08:55.821Z","action":2},{"_id":"KM7wyv73Zr6Z3hsJB","userId":"GSk5nyr98hHRBRmX6","roundIndex":1,"_groupId":"52LvZAZHdHziTXnk4","timestamp":"2015-08-04T19:04:46.342Z","action":1},{"_id":"nsygJtFXdsPhtiy8d","userId":"Lb3ehSYefBwcE58qa","roundIndex":1,"_groupId":"52LvZAZHdHziTXnk4","timestamp":"2015-08-04T19:04:49.025Z","action":1},{"_id":"EYzAeWfdNqTwpzuoK","userId":"JTbimyxH8iS7Mr394","roundIndex":1,"_groupId":"544TGaccAGaiHNKAy","timestamp":"2015-08-04T19:30:48.751Z","action":2},{"_id":"xJEStzGeohWgukDo5","userId":"t5q8PtjTJ5tBCCA48","roundIndex":1,"_groupId":"544TGaccAGaiHNKAy","timestamp":"2015-08-04T19:30:45.560Z","action":1}]
//load data into json
//// init(day); 
//Local Test on Chrome - Error: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.
//===================Way 1: Read Json from static file=======================================
function init(day) {
  readTextFile('data/instances.json', function(text){
    // Parse JSON string into object
      instanceJSON = JSON.parse(text)[day];
      readTextFile('data/gamegroups.json', function(text){
          gamegroupsJSON = JSON.parse(text)[day];
          readTextFile('data/links.json', function(text){
            linksJSON = JSON.parse(text)[day];
            readTextFile('data/users.json', function(text){
              usersJSON = JSON.parse(text)[day];
            });
          });
      });
  });
}
 function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//===============Way2: load json from URI========================================
function init2(day) {
 loadJSON('data/instances.json', function(response) {
  // Parse JSON string into object
    instanceJSON = JSON.parse(response)[day];
    loadJSON('data/gamegroups.json', function(response) {
        gamegroupsJSON = JSON.parse(response)[day];
        loadJSON('data/links.json', function(response) {
          linksJSON = JSON.parse(response)[day];
          loadJSON('data/users.json', function(response) {
            usersJSON = JSON.parse(response)[day];
          });
        });
    });
 });
}
function loadJSON(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);
} 


function flatten(arrayOfArrays) {
  return [].concat.apply([], arrayOfArrays);
}

function getColorScale(userIds) {
  if ( userIds.length <= 10 ) return d3.scale.category10().domain(userIds);
  if ( userIds.length <= 20 ) return d3.scale.category20().domain(userIds);

  // http://stackoverflow.com/questions/20847161/colors-on-d3-js
  // https://gist.github.com/mbostock/310c99e53880faec2434
  var generator = d3.scale.cubehelix()
    .domain([0, .5, 1])
    .range([
      d3.hsl(-100, 0.75, 0.35),
      d3.hsl(  80, 1.50, 0.80),
      d3.hsl( 260, 0.75, 0.35)
    ]);

  var colors = userIds.map( (u, i) => { return generator(Math.random()) });
  return d3.scale.ordinal().domain(userIds).range(colors);
}

//Template.viz.onRendered(function() {
  var svg = d3.select(this.find("svg"));
  var $svg = this.$("svg");
  var container = svg.select(".scaler");

  var height = $svg.height();
  var width = $svg.width();

  // console.log(
  //   Experiments.find().count(),
  //   GameGroups.find().count(), // Only used to determine nodeWidth atm
  //   Actions.find().count()
  // );

  console.log("Data loaded at ", new Date);

  // Instructions according to https://github.com/soxofaan/d3-plugin-captain-sankey

  // Generate list of nodes (instances), mapped to indices

  var instances = instanceJSON;//Experiments.find().fetch();
  //console.log('kev:instances === ', JSON.stringify(instances));
  var instanceMap = {};
  for( let [i, inst] of instances.entries() ) {
    instanceMap[inst._id] = i;
  }

  // Generate list of links (who went from one game to another)
  var users = usersJSON; // _.uniq( flatten(Experiments.find().map( (g) => { return g.users }) ) );
  var supergames = 40; // GameGroups.find().count();

  var links = linksJSON;// [];

  var colorScale = getColorScale(users);  //Error: Cannot read property 'cubehelix' of undefined

  // For each user, generate a link for the list of games
//   for( let userId of users) {
//     var insts = Experiments.find({users: userId},
//       {sort: {startTime: 1}}).fetch();

//     for( let x = 1; x < insts.length; x++ ) {
//       links.push({
//         userId,
//         source: instanceMap[insts[x-1]._id],
//         target: instanceMap[insts[x]._id],
//         value: 1
//       });
//     }
//  }

  var layoutIterations = 10;

  // Scale appropriately, but limit display for very sparse data
  var maxNodeWidth = 100;
  var maxWidth = maxNodeWidth * 2 * supergames;

  var sankey = d3.sankey()
    .size([ Math.min(width, maxWidth), height ])
    .nodeWidth( Math.min( (width * 0.5) / supergames, maxNodeWidth) )
    .nodePadding(10)
    .nodes(instances)
    .links(links)
    .layout(layoutIterations);

  console.log("Layout done at ", new Date);

  var path = sankey.link();

  // Draw links
  container.selectAll('.link')
    .data(links)
    .enter().append('path')
    .attr('class', d => `link u_${d.userId}`)
    .attr('d', path)
    .style({
      stroke: (d) => { return colorScale(d.userId) },
      "stroke-width": (d) => { return Math.max(1, d.dy) }
    });

  // Draw nodes
  var games = container.selectAll('.node')
    .data(instances)
  .enter().append('a')
    .attr({
      target: '_blank',
      'xlink:href': (d) => Router.path('expAdmin', {groupId: d._id})
    })
  .append('g')
    .attr({
      'class': 'node',
      transform: (d) => { return `translate(${d.x}, ${d.y})` }
    });

  var rounds = 10;
  var nodeWidth = sankey.nodeWidth();

  games.append('title').text(d => d._id);
  games.append('rect')
    .attr({
      class: "game",
      height: function (d) { return d.dy; },
      width: nodeWidth
    });

  var x = d3.scale.ordinal()
      .domain( Array.from(Array(10)).map( (e, i) => i+1 ) )
      .rangeBands([0, nodeWidth]);

  var xBand = x.rangeBand();

  // Pre-group actions by _groupId and _roundIndex otherwise we are going to
  // get owned trying to search for each one by group
  var actionsByGroup = d3.nest()
    .key( d => d._groupId ) 
    .map(actionsJSON, d3.map);  //Actions.find().fetch()

  // Within games, draw actions
  games.each( function(d) {
    var actions = actionsByGroup.get(d._id);

    var y = d3.scale.ordinal()
      .domain(d.users)
      .rangeBands([0, d.dy]);

    var yBand = y.rangeBand();

    // Draw all the actions mwahaha
    d3.select(this).selectAll('.action')
      .data(actions)
    .enter().append('rect')
      .attr({
        'class': (d) => { return `action a${d.action}`},
        x: (d) => { return x(d.roundIndex) },
        y: (d) => { return y(d.userId) },
        width: xBand,
        height: yBand
      });

  });

  console.log("Rendering finished at ", new Date);

  // Set up zoom
  var zoom = d3.behavior.zoom();
  zoom.on("zoom", function() {
    container.attr("transform",
      `translate(${d3.event.translate})scale(${d3.event.scale})`);
  });

  svg.call(zoom);
//});

//Template.viz.events({
  $(".link").mouseenter(function(e, t) {
    var userId = d3.select(e.target).datum().userId;
    d3.select(t.find("svg"))
      .selectAll(`.link.u_${userId}`).classed("highlighted", true);
  });
  $(".link").mouseleave(function(e, t) {
    var userId = d3.select(e.target).datum().userId;
    d3.select(t.find("svg"))
      .selectAll(`.link.u_${userId}`).classed("highlighted", false);
   });
//});
