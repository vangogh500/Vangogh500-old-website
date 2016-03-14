var Link = ReactRouter.Link;

var About = React.createClass({
  render: function() {
    return (
      <div className="col-md-9 animated fadeInLeft">
        <div className="jumbotron">
          <h1>About Me</h1>
          <p>Born in 1992 in a remote part of Nagano, Japan, I soon found myself living an ordinary American life here in Massachusetts. At the age of twelve, I would discover the saxophone, embarking me on a voyage of creativity that I still sail on today. The endeavor has lead me far and wide, spending two years at New York University studying Jazz Performance, I soon found myself taking a year off; I was unsure about my goals and concerned about my future.</p>
          <p>Through a bit of soul-searching, I landed at UMass Amherst, and it was at this time that I discovered coding. It had everything I loved about music: seemingly infinite creativity on a foundation of rudimentary logic, a mix of academia and art. So here I am now, a steadfast devotee to that of creativity, immersed in music and code.</p>
        </div>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row title-section">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <div className="jumbotron title-section animated fadeInRight">
              <h1>Vangogh500</h1>
              <h3>Kai Matsuda | 松田鹿飛</h3>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="https://soundcloud.com/kaismatsuda" role="button"><span className="fa fa-soundcloud"></span></a></span>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="https://github.com/vangogh500" role="button"><span className="fa fa-github"></span></a></span>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="#" role="button"><span className="fa fa-twitter"></span></a></span>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="https://www.linkedin.com/in/vangogh500" role="button"><span className="fa fa-linkedin"></span></a></span>
              <a className="btn btn-primary btn-lg social-media waves-effect waves-light blue-grey darken-2 resume" href="./img/resume.pdf" role="button"><span className="fa fa-file"></span>  Resume</a>
            </div>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <ul className="nav nav-tabs" role="tablist">
              <li className="active">
                <Link to="/"><span className="glyphicon glyphicon-user"></span> About</Link>
              </li>
              <li>
                <Link to="/about/education"><span className="fa fa-graduation-cap"></span> Education</Link>
              </li>
              <li>
                <Link to="/about/skills">
                  <span className="fa fa-wrench"></span> Skills
                </Link>
              </li>
              <li>
                <Link to="/about/employment">
                  <span className="fa fa-building"></span> Employment
                </Link>
              </li>
              <li>
                <Link to="/about/timeline">
                  <span className="fa fa-calendar"></span> Timeline
                </Link>
              </li>
            </ul>

          </div>
        </div>
        <div className="row content secondary-row">
          <div className="col-md-1"></div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navigation z-depth-1" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand waves-effect waves-light">Vangogh500.io</Link>
            </div>

            <div className="collapse navbar-collapse" id="main-navigation">
              <ul className="nav navbar-right navbar-nav">
                <li role="presentation" className="waves-effect waves-light">
                  <Link to='/projects' className="waves-effect waves-light">Projects</Link>
                </li>
                <li><a className="waves-effect waves-light" href="#">Blog</a></li>
                <li><Link to="/contact" className="waves-effect waves-light">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var ClassList = React.createClass({
  render: function() {
    var classNodes = this.props.data.map(function(cls) {
      return (
        <div>
          <a data-toggle="collapse" href={"#" + cls.id} className="collection-item black-text">
            {cls.id} : {cls.name}
            <small className="grey-text date-label">{cls.date}</small>
            <span className="label label-warning pull-right">{cls.language}</span>
          </a>
          <div id={cls.id} className="collapse">
            <div className="panel-footer z-index-0 grey-text">
              {cls.desc}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="courseList">{classNodes}</div>
    );
  }
});

var Subjects = React.createClass({
  render: function() {
    var subjectNodes = this.props.data.map(function(sbj) {
      return (
        <div className="collection">
          <a className="collection-item unique-color">
            <h4 className="white-text">{sbj.name}<span className="badge-md white-text">{sbj.courses.length}</span></h4>
            <ClassList data={sbj.courses} />
          </a>
        </div>
      );
    });
    return (
      <div className="card-content">
        {subjectNodes}
      </div>
    );
  }
});

var Schools = React.createClass({
  render: function() {
    var schoolNodes = this.props.data.map(function(school) {
      return (
        <div id={school.id} className="card">
          <div className="card-content z-index-2">
            <h4>{school.name}</h4>
            <h5>{school.info}</h5>
          </div>
          <Subjects data={school.subjects} />
        </div>
      );
    });
    return (
      <div className="schools">
        {schoolNodes}
      </div>
    );
  }
});

var Education = React.createClass({
  render: function() {
    return (
      <div className="animated fadeInLeft">
        <div className="jumbotron col-md-9">
          <h1>Education</h1>
          <Schools data={classes} />
        </div>
        <div className="col-md-2 right-sidebar">
          <div id="fixed-sidebar" className="affix" data-spy="affix">
            <nav className="scrollspy hidden-xs hidden-sm" data-offset-top="200" data-offset-bottom="700" id="scrollspy">
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#umass">UMASS</a></li>
                <li><a href="#nyu">NYU</a></li>
                <li><a href="#nmh">NMH</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
});

var ProgrammingLanguages = React.createClass({
  render: function() {
    var skillNodes = this.props.data.map(function(skll) {
      var styling = {
        width: skll.scale
      };
      var classAttr = "progress-bar animated slideInLeft " + skll.classAttr;
      return (
        <div>
          <h4>{skll.name}</h4>
          <div className="progress z-depth-1">
           <div className={classAttr} role="progressbar"
           aria-valuenow={skll.scale} aria-valuemin="0" aria-valuemax="100" style={styling}>
             {skll.level}
           </div>
          </div>
          <p className="grey-text">{skll.info}</p>
        </div>
      );
    });
    return (
      <div className="skillSet">
        {skillNodes}
      </div>
    );
  }
});

var ProgrammingLanguageContainer = React.createClass({
  render: function() {
    return (
      <div className="animated slideInLeft">
        <ProgrammingLanguages data={prg_languages} />
      </div>
    );
  }
});

var MarkUpLanguageContainer = React.createClass({
  render: function() {
    return (
      <div className="animated slideInLeft">
        <ProgrammingLanguages data={mrkup_languages} />
      </div>
    );
  }
});

var OtherSkillsContainer = React.createClass({
  render: function() {
    return (
      <div className="animated slideInLeft">
        <ProgrammingLanguages data={foreign_languages} />
      </div>
    );
  }
});


var Skills = React.createClass({
  render: function() {
    return (
      <div className="col-md-9 animated fadeInLeft">
        <div className="jumbotron">
          <h1>Skills</h1>
          <nav className="navbar default-color">
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/about/skills/programming-languages"className="waves-effect waves-light">Programming Languages</Link></li>
                <li><Link to="/about/skills/markup-languages" className="waves-effect waves-light">Markup Languages</Link></li>
                <li><Link to="/about/skills/other" className="waves-effect waves-light">Foreign Languages</Link></li>
            </ul>
          </nav>
          <hr/>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var EmpList = React.createClass({
  render: function() {
    var employmentNodes = this.props.data.map(function(emp) {
      return (
        <div className="card">
            <div className="card-content">
                <span className="card-title black-text">{emp.name}</span>
                <span className="pull-right">{emp.position}</span>
                <br/>
                <small className="grey-text">{emp.date} | {emp.location}</small>
                <hr/>
                <p>{emp.info}</p>
            </div>
        </div>
      );
    });
    return (
      <div>
        {employmentNodes}
      </div>
    );
  }
});

var Employment = React.createClass({
  render: function() {
    return (
      <div className="col-md-9 animated fadeInLeft">
        <div className="jumbotron">
          <h1>Employment</h1>
          <EmpList data={employment_history} />
        </div>
      </div>
    );
  }
});

var TimeLine = React.createClass({
  render: function() {
    return (
      <div className="col-md-9 animated fadeInLeft">
        <div className="jumbotron">
          <h1>Timeline</h1>
          <ul className="timeline">
            <li>
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Born in Oshika, Japan</h4>
                  <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> November 21, 1992</small></p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Attend Conway Grammar School</h4>
                  <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>1995</small></p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge danger"><i className="glyphicon glyphicon-credit-card"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Attend Eaglebrook School</h4>
                  <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>1995</small></p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Attend Northfield Mount Hermon</h4>
                  <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>1995</small></p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge info"><i className="glyphicon glyphicon-floppy-disk"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Attend New York University</h4>
                  <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>2011</small></p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">Attend University of Massachusetts Amherst</h4>
                  <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>2014</small></p>
                </div>
              </div>
            </li>
        </ul>
        </div>
      </div>
    );
  }
});

var Projects = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row title-section">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <div className="jumbotron title-section animated fadeInRight">
              <h1>Projects</h1>
              <p>To me creativity is a balance between structure and flexibility. It is somewhat a contradiction as it requires you to build upon a strong foundation only to be set free from it.</p>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="https://soundcloud.com/kaismatsuda" role="button"><span className="fa fa-soundcloud"></span></a></span>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="https://github.com/vangogh500" role="button"><span className="fa fa-github"></span></a></span>
            </div>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <ul className="nav nav-tabs" role="tablist">
              <li className="active">
                <Link to="/projects/music"><span className="glyphicon glyphicon-music"></span> Music</Link>
              </li>
              <li>
                <Link to="/projects/software"><span className="fa fa-file-code-o"></span> Software</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row content secondary-row">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var Music = React.createClass({
  render: function() {
    return (
      <div>
        <div className="banner1 animated fadeInRight">
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-11 animated fadeInLeft">
          <div className="jumbotron">
            <h1 className="st-teal">Music</h1>
            <hr className="part-divider"/>
            <div className="row">
              <div className="col-md-9">
                {this.props.children}
              </div>
              <div className="col-md-3">
                <ul className="nav nav-pills nav-stacked album-menu">
                  <h4 className="black-text">Albums</h4>
                  <li className="waves-effect waves-light"><a className="grey-text">Rough Draft Beats</a></li>
                  <li className="waves-effect waves-light"><a className="grey-text">Game Music (in prog)</a></li>
                  <li className="waves-effect waves-light"><a className="grey-text">Messages (in prog)</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var RoughDraftBeat = React.createClass({
  render: function() {
    var sty = {
      border: "none"
    };
    return (
      <div className="jumbotron">
        <h4>Rough Draft Beats</h4>
        <div className="genres">
          <span className="badge blue">Electronic</span>
          <span className="badge teal">Hip-Hop</span>
          <span className="badge green">Jazz</span>
          <span className="badge red">Pop</span>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL6RENvAK7R4pfNP5NHDB9Gq9KRM7hfBHt&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>
        <div className="liner-note text-muted">
          <p>Ive always admired the accessibility of popular music; its ability to get something moving inside whether it be the simple urge to move the body. While the development of technique and complexity might be worth exploring, as it is especially done to a rigorous passion in the Jazz and Classical genres, it too often counteracts or rather sacrifices the accessibility of the music. For me showmanship can often be an ego driven aspect of the creative process, it is what I enjoy, but the true power of music, in my opinion, comes simply from its ability to comfort, to move, to captivate our listeners. While the drive for self improvement is an admirable trait, you cant forget to have a good time with everyone else.</p>
          <p>The album and the music behind it is an attempt or an exploration of this particular admiration of mine. It gathers influence from genres such as electronic, pop, and hip-hop in their popular forms. Each piece includes a short instrumental solo inspired by my background in Jazz - an attempt to express the ego driven aspect of the creative process without sacrificing but complementing its accessibility. The album "Rough Draft Beats" refers to the endless creative process of forever-polishing a piece; instead the pieces are left rough as a recognition that none of these pieces are truly complete.</p>
        </div>
      </div>
    );
  }
});

var Software = React.createClass({
  render: function() {
    return (
      <div>
        <div className="banner1 animated fadeInRight">
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-11 animated fadeInLeft">
          <div className="jumbotron">
            <h1 className="st-teal">Software</h1>
            <hr className="part-divider"/>
            <div className="row">
              <div className="col-md-9">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row title-section">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <div className="jumbotron title-section animated fadeInRight">
              <h1>Contact</h1>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="https://soundcloud.com/kaismatsuda" role="button"><span className="fa fa-soundcloud"></span></a></span>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="https://github.com/vangogh500" role="button"><span className="fa fa-github"></span></a></span>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="#" role="button"><span className="fa fa-twitter"></span></a></span>
              <span><a className="btn btn-primary btn-lg social-media waves-effect waves-light" href="https://www.linkedin.com/in/vangogh500" role="button"><span className="fa fa-linkedin"></span></a></span>
            </div>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <h6 className="text-muted">Feel free to contact me via any of my social media accounts or at <a href="mailto:kmatsuda@umass.edu">kmatsuda@umass.edu</a>.</h6>
          </div>
        </div>
      </div>
    );
  }
});

var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Home}>
        <IndexRoute component={About}/>
        <Route path="/about/education" component={Education}/>
        <Route path="/about/skills" component={Skills}>
          <Route path="/about/skills/programming-languages" component={ProgrammingLanguageContainer}/>
          <Route path="/about/skills/markup-languages" component={MarkUpLanguageContainer}/>
          <Route path="/about/skills/other" component={OtherSkillsContainer}/>
        </Route>
        <Route path="/about/employment" component={Employment}/>
        <Route path="/about/timeline" component={TimeLine}/>
      </Route>
      <Route path="/projects" component={Projects}>
        <Route path="/projects/music" component={Music}>
          <IndexRoute component={RoughDraftBeat}/>
        </Route>
        <Route path="/projects/software" component={Software}>
        </Route>
      </Route>
      <Route path="/Contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('content'));
