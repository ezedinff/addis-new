## React Abstractions
- HOC (Higher order components)
```
// is a component returns a new component
const EnhancedComponent = higerOrderComponent(WrappedComponent)
function higerOrderComponent(Component) {
    return (
        <Component></Component>
    )
}
```
- Rp (Render props)
```
A component with render prop takes a function that returns a React element
calls it instead of implementing its own render logic

const RenderPropsComponent = (props) => {
    return props.children({
        passProps: "DATA"
    })
}
```
- Context
```
React Context API is designed to share data that can be considered as global to all
component descendants in component tree.
the biggest benefits to using context is it avoids props drilling to share data in deep 
component hierarchies

const MyContext = React.createContext({})

// value props will be accessible to any of its children and even deep childs
// value passed can be accessed from child component by easily using useContext hook

<MyContext.Provider value={oggedUser}>
    <Header/>
</MyContext.Provider>

const Header = () => {
    const loggedUser = useContext(MyContext)
    return <div>user</div>
}
```

to load image lazly use library react-simple-img
```
<SimpleImg
    src="imageUrl"
    animationDuration="1"
    width={200} height={200}
    applyAspectRatio="true"
/>
```
