var React = require('react');
var NavAndAside = require('./navAndAside');

class Head extends React.Component{
    render(){
        return (
             <head>
                <meta charSet="utf-8"/>
                <title>Recipe UNKEEP</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
        );
    }
}

class Aside extends React.Component{
    render(){
        return(
            <aside>
                <figure>
                    <h4>Recently Viewed</h4>
                    <img class="side-img" src="https://i.imgur.com/YTGycJi.jpg" />
                </figure>
            </aside>
        );
    }
}

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a method="GET" href="/recipe/new"><span class=" glyphicon glyphicon-plus" aria-hidden="true"></span>Add New Recipe</a>
                    </li>
                    <li class="nav-item">
                    <a method="GET" href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

class FormDeleteRecipe extends React.Component{
    render(){

        const id = this.props.data.id;
        const title = this.props.data.title;
        const ingredients = this.props.data.ingredients;
        const instructions = this.props.data.instructions;
        const category = this.props.data.category;

        let formAction = '/recipe/' + id + '?_method=DELETE';

        return(
            <html>
                <form method="POST" action={formAction}>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label >Title: </label>
                            <input type="text" name="title"  value={title} />
                        </div>
                        <div class="col-md-4 mb-3 ml-5">
                            <label>Category: </label>
                            <input type="text" name="category" value={category} />
                        </div>
                        <div class="col-md-1 invisible">
                            <label>ID:</label>
                            <input class="invisible" type="text" name="id" class="form-control" value={id} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-10 mb-3">
                            <label>Ingredient List</label>
                            <textarea type="text" name="ingredients" class="form-control"  value={ingredients}  rows="5">
                            </textarea>
                        </div>
                    </div>
                    <div class="form-row">
                            <div class="col-md-10 mb-3">
                            <label>Instructions</label>
                            <textarea type="text" name="instructions" class="form-control"  value={instructions}  rows="7">
                            </textarea>
                        </div>
                    </div>
                    <input type="submit" value="DELETE RECIPE?"  class="btn btn-danger"/>
                </form>
            </html>
        )
    }
}

class Delete extends React.Component {

  render() {

    const listArr = this.props.objToRender;
    console.log("inside DELETE start: " + listArr.category);

    return (
        <html>
                <Head/>
                <body>
                    <header>
                        <h1>Recipe List Collector</h1>
                    </header>
                    <main>
                        <Navigation/>
                        <Aside/>
                        <div class="content">
                            <FormDeleteRecipe data={listArr}/>
                        </div>
                    </main>
                </body>
            </html>
    );
  }
}

module.exports = Delete;