import React, {Component} from 'react';
import Layout from "../components/layout";
import Gist from "../components/gist";

class Inputs extends Component {
    render() {
        return <Layout>
            <h1>Inputs</h1>
            <p class={"describe"}>This page is WIP</p>
            <article>
                <h2>Buttons</h2>
                <button>Button no class</button>
                <button className={"primary"}>Primary</button>
                <button className={"secondary"}>Secondary</button>
                <button className={"cancel"}>Cancel</button>
                <button className={"delete"}>Delete</button>
                <Gist gist="0993d5c23318d2aa6bd9e2f1a32d3765"/>
            </article>
            <article>
                <h2>Checkbox</h2>
                <fieldset>
                    <label><input type="checkbox"/>Cats</label>
                    <label><input type="checkbox"/>Dogs</label>
                    <label><input type="checkbox"/>Rabbits</label>
                </fieldset>
                <Gist gist="ae3f25050f0d04bfef0ca2db8b7f30dc"/>
            </article>
            <article>
                <h2>Date</h2>
                <label htmlFor="birthday">Date</label>
                <input type="date" id="birthday" name="birthday"
                       value="2018-07-22"
                       min="2018-01-01" max="2018-12-31"/>
                <Gist gist="c901d39a498e089cc97d8aa6f9384804"/>
            </article>
            <article>
                <h2>File</h2>
                <label htmlFor="avatar">Upload avatar</label>
                <input type="file"
                       id="avatar" name="avatar"
                       accept="image/png, image/jpeg"/>
                <Gist gist="7ae1efd939001d477ec4558453fde49a"/>
            </article>
            <article>
                <h2>Radio</h2>
                <fieldset>
                    <legend>Favourite pet</legend>
                    <label htmlFor="cat"><input type="radio" id="cat" name="pet" value="cat"/>Cat</label>
                    <label htmlFor="dog"><input type="radio" id="cat" name="pet" value="dog"/>Dog</label>
                    <label htmlFor="rabbit"><input type="radio" id="cat" name="pet" value="rabbit"/>Rabbit</label>
                </fieldset>
                <Gist gist="d5911d3362321f8e1c01503cacbac052"/>
            </article>
            <article>
                <h2>Select</h2>
                <label htmlFor="pet-select">Favourite pet</label>
                <select name="pets" id="pet-select">
                    <option value="">Choose a pet</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                </select>
                <Gist gist="6687cc0e411a1788fc98959e7424d4f7"/>
            </article>
            <article>
                <h2>Text</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required/>
                <Gist gist="f559f698e7660548a3f4c5c535ac7650"/>
            </article>
        </Layout>;
    }
}

export default Inputs;
