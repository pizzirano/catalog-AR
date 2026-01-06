// L&L Tecnologias LTDA - Catálogo AR
// Script para carregar projetos dinamicamente

document.addEventListener('DOMContentLoaded', function() {
	loadProjects();
	setupNavigation();
	setupBackToTop();
});

// Carregar projetos do JSON
async function loadProjects() {
	try {
		const response = await fetch('data/projects.json');
		const projects = await response.json();
		
		const container = document.getElementById('projects-container');
		if (!container) return;
		
		container.innerHTML = '';
		
		projects.forEach(project => {
			const projectCard = createProjectCard(project);
			container.appendChild(projectCard);
		});
	} catch (error) {
		console.error('Erro ao carregar projetos:', error);
		const container = document.getElementById('projects-container');
		if (container) {
			container.innerHTML = '<p style="text-align: center; color: #999;">Nenhum projeto encontrado.</p>';
		}
	}
}

// Criar card de projeto
function createProjectCard(project) {
	const workDiv = document.createElement('div');
	workDiv.className = 'col-md-4 col-xs-6 work';
	
	workDiv.innerHTML = `
		<img class="img-responsive" src="${project.image}" alt="${project.name}">
		<div class="overlay"></div>
		<div class="work-content">
			<span>Projeto AR</span>
			<h3>${project.name}</h3>
			<p style="color: #fff; margin-top: 10px; font-size: 14px;">${project.description}</p>
		</div>
		<div class="work-link">
			<a href="projects/${project.folder}/index.html"><i class="fa fa-external-link"></i></a>
		</div>
	`;
	
	return workDiv;
}

// Setup de navegação suave
function setupNavigation() {
	const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
	
	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			const targetId = this.getAttribute('href');
			const targetSection = document.querySelector(targetId);
			
			if (targetSection) {
				targetSection.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
			
			// Fechar menu mobile se estiver aberto
			const mainNav = document.querySelector('.main-nav');
			if (mainNav) {
				mainNav.classList.remove('active');
			}
		});
	});
	
	// Toggle mobile menu
	const navCollapse = document.querySelector('.nav-collapse');
	if (navCollapse) {
		navCollapse.addEventListener('click', function() {
			const mainNav = document.querySelector('.main-nav');
			if (mainNav) {
				mainNav.classList.toggle('active');
			}
		});
	}
	
	// Mudar navbar ao scroll
	window.addEventListener('scroll', function() {
		const navbar = document.querySelector('.navbar');
		// if (window.scrollY > 50) {
		// 	navbar.style.background = 'rgba(0, 0, 0, 0.9)';
		// } else {
		// 	navbar.style.background = 'transparent';
		// }
	});
}

// Setup botão voltar ao topo
function setupBackToTop() {
	const backToTop = document.getElementById('back-to-top');
	
	if (backToTop) {
		window.addEventListener('scroll', function() {
			if (window.scrollY > 300) {
				backToTop.classList.add('show');
			} else {
				backToTop.classList.remove('show');
			}
		});
		
		backToTop.addEventListener('click', function() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
		
		// Adicionar ícone
		backToTop.innerHTML = '<i class="fa fa-arrow-up"></i>';
	}
}

