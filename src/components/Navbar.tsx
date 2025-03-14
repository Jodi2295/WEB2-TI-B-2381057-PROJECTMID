import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { BellIcon } from "@heroicons/react/16/solid"
import { NavLink, useNavigate } from "react-router-dom"

const navigation = [
	{ name: 'Product', to: '/product'},
	{ name: 'Recipes', to: '/recipes'},
	{ name: 'Todo', to: '/todo' },
	{ name: 'Post', to: '/posts'},
	{ name: 'Comments', to: '/comments'}
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<Disclosure as="nav" className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

					<Menu as="div" className="relative ml-3 md:hidden">
							<div>
								<MenuButton className="relative flex rounded-full bg-gray-700 p-2 hover:bg-gray-600 focus:outline-none">
									<span className="absolute -inset-1.5" />
									<span className="sr-only">Open Mobile Nav</span>
									<img
										alt="Your Company"
										src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
										className="h-8 w-auto"
									/>
								</MenuButton>
							</div>
							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							>
								<MenuItem>
									<a
										href="#"
										onClick={() => navigate(("/"))}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Home
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href="#"
										onClick={() => navigate(("/product"))}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Product
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href="#"
										onClick={() => navigate(("/recipes"))}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Recipes
									</a>
								</MenuItem>
								<MenuItem>
									<a	
										href="#"
										onClick={() => navigate(("/carts"))}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Carts
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href="#"
										onClick={() => navigate(("/posts"))}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Post
									</a>
								</MenuItem>
							</MenuItems>
						</Menu>
						<div className="hidden md:flex shrink-0 items-center">
							<button className="hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200" onClick={() => navigate(("/"))}>
								<img
									alt="Your Company"
									src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
									className="h-8 w-auto"
								/>
							</button>
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								{navigation.map((item) => (
									<NavLink to={item.to} key={item.name}
										className={({isActive}) => {
												return classNames(
													isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
													'rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200',
												)
										}}>
										{item.name}
									</NavLink>
								))}
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button
							type="button"
							className="relative rounded-lg bg-gray-700 p-2 text-gray-400 hover:text-white hover:bg-gray-600 transition-colors duration-200"
						>
							<span className="absolute -inset-1.5" />
							<span className="sr-only">View notifications</span>
							<BellIcon aria-hidden="true" className="size-6" />
						</button>

						{/* Profile dropdown */}
						<Menu as="div" className="relative ml-3">
							<div>
								<MenuButton className="relative flex rounded-lg bg-gray-700 p-1 hover:bg-gray-600 transition-colors duration-200">
									<span className="absolute -inset-1.5" />
									<span className="sr-only">Open user menu</span>
									<img
										alt=""
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										className="size-8 rounded-lg"
									/>
								</MenuButton>
							</div>
							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							>
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Your Profile
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Settings
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Sign out
									</a>
								</MenuItem>
							</MenuItems>
						</Menu>
					</div>
				</div>
			</div>
		</Disclosure>
	)
}

export default Navbar