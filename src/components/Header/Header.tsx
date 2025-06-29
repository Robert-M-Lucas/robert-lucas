import "./header.scss";
import "./link_no_under.scss";

export function Header() {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-sm-auto" style={{marginRight: '20px'}}>
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white">
                            {/*<svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>*/}
                            {/*<img src="{% static 'icon.png'%}" width="32" height="32">*/}
                            <h3 style={{marginBottom: '5px'}}>Robert Lucas</h3>
                        </a>
                    </div>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {/*<li><a href="/" className="nav-link px-2 text-white {% if pagename|lower == " home" %} fw-bold {% endif %}">Home</a></li>*/}
                        {/*<li><a href="/projects" className="nav-link px-2 text-white {% if pagename|lower == " projects" %} fw-bold {% endif %}">Projects</a></li>*/}
                        {/*<li><a href="/achievements" class="nav-link px-2 text-white {% if pagename|lower == "achievements" %} fw-bold {% endif %}">Achievements</a></li>*/}
                        {/*
                <li><a href="/place" class="nav-link px-2 text-white {% if pagename|lower == "place" %} fw-bold {% endif %}">Place</a></li>

                <li><a href="/chat" class="nav-link px-2 text-white {% if pagename|lower == "chat" %} fw-bold {% endif %}">Chat</a></li>
                */}
                        <li>
                            <ul className="navbar-nav px-2">
                                {/*<a className="nav-link dropdown-toggle {% if pagename|lower == " place" %} fw-bold {% endif if pagename|lower="=" "chat" %}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
                                {/*    Experiments*/}
                                {/*</a>*/}
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    {/*<li><a className="dropdown-item {% if pagename|lower == " place" %} fw-bold {% endif %}" href="/place">Place</a></li>*/}
                                    {/*<li><a className="dropdown-item {% if pagename|lower == " chat" %} fw-bold {% endif %}" href="/chat">Chat</a></li>*/}
                                </ul>
                            </ul>
                        </li>
                        {/*{'{'}% if user.is_authenticated %{'}'}*/}
                        {/*<li><a href="/private" className="nav-link px-2 text-white {% if pagename|lower == " private" %} fw-bold {% endif %}">Private</a></li>*/}
                        {/*<li><a href="/admin" className="nav-link px-2 text-white {% if pagename|lower == " admin" %} fw-bold {% endif %}">Admin</a></li>*/}
                        {/*
                 else
                    <li><a href="#" class="nav-link px-2 text-secondary">Private</a></li>
                    */}
                        {/*{'{'}% endif %{'}'}*/}
                    </ul>
                    {/*
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
            </form>
            */}
                    <div className="text-end">
                        {'{'}% if user.is_authenticated %{'}'}
                        <label className="label fw-bold" style={{marginRight: '10px'}}>{'{'}{'{'} user.username {'}'}{'}'}</label>
                        <a href="/admin/logout"><button type="button" className="btn btn-outline-light me-2">Logout</button></a>
                        {'{'}% else %{'}'}
                        <a href="/admin/login"><button type="button" className="btn btn-warning me-2">Login</button></a>
                        {'{'}% endif %{'}'}
                    </div>
                </div>
            </div>
        </header>
    );
}