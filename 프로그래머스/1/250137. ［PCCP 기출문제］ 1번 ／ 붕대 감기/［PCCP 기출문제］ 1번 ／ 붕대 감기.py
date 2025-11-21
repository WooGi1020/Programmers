def solution(bandage, health, attacks):
    attack_dict = {t: dmg for t, dmg in attacks}
    
    n_health = health 
    heal_count = 0    
    
    t_cast, t_heal, t_bonus = bandage
    
    last_attack_time = attacks[-1][0]

    for i in range(1, last_attack_time + 1):
        if i in attack_dict:
            heal_count = 0 
            n_health -= attack_dict[i] 

            if n_health <= 0:
                return -1
                
        else:
            heal_count += 1
            n_health += t_heal 

            if heal_count == t_cast:
                n_health += t_bonus
                heal_count = 0    

            if n_health > health:
                n_health = health

    return n_health