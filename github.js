class Github {
    constructor(){
        this.client_id = '0ab5f983c152316545c0'
        this.client_secret = 'bf0c77bcb43d4addd0996c739ea367f4432f606f' 
        this.repos_count = 5
        this.repos_sort = 'crated: asc'; 
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        
        return {
            profile,
            repos
        }
    }
}